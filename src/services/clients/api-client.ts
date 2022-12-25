import {addTokensToStorage, getTokenFromStorage} from "../../utils/localStorageHelper";
import {
    IAuthResponse,
    IDefaultFormValues,
    IIngredient, IOrderDetails,
    IRefreshData,
    IResponseMessage
} from "../../utils/types";

interface IRequestOptions extends RequestInit{
    authorization?: string | null;
}

class ApiClient {
    BASE_URL: string = "https://norma.nomoreparties.space/api";

    async _request<T>(url: string, options?: IRequestOptions): Promise<T> {
        return fetch(url, options).then(res => this.checkResponse<T>(res))
    }

    async signIn(url: string, userData: IDefaultFormValues): Promise<IAuthResponse> {
        const { email, password } = userData;
        return await this._request<IAuthResponse>(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
    }

    async signOut(url: string, token: string): Promise<IResponseMessage> {
        return await this._request<IResponseMessage>(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token}),
        });
    }

    async register(url: string, userData: IDefaultFormValues): Promise<IAuthResponse> {
        const { email, password, name } = userData;
        return await this._request<IAuthResponse>(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password, name}),
        });
    }

    async refreshToken(url: string): Promise<IRefreshData> {
        return await this._request<IRefreshData>(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                token: getTokenFromStorage("refreshToken"),
            })
        });
    }

    async resetPasswordOnFirstStep(url: string, data: IDefaultFormValues): Promise<IResponseMessage> {
        const { email } = data;
        return await this._request<IResponseMessage>(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email}),
        });
    }

    async resetPasswordOnSecondStep(url: string, data: IDefaultFormValues): Promise<IResponseMessage> {
        const { password, code } = data;
        return await this._request<IResponseMessage>(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({password, token: code}),
        });
    }

    async fetchWithRefresh<T>(url: string, options: RequestInit): Promise<T> {
        try {
            return await this._request<T>(`${this.BASE_URL}${url}`, options);
        } catch (err) {
            if (!this.checkRequestErrorType(err)) {
                return Promise.reject(err);
            }
            if (err.message === "jwt expired") {
                const refreshData = await this.refreshToken("/auth/token");
                if (!refreshData.success) {
                    await Promise.reject(refreshData);
                }
                addTokensToStorage(refreshData.accessToken, refreshData.refreshToken);
                const headers = options?.headers ? new Headers(options.headers) : new Headers();
                headers.set("Authorization", refreshData.accessToken);
                return await this._request<T>(`${this.BASE_URL}${url}`, options);
            } else {
                return Promise.reject(err);
            }
        }
    }

    async getIngredients(url: string): Promise<IIngredient[]> {
        return await this._request<IIngredient[]>(`${this.BASE_URL}${url}`);
    }

    async sendOrderDetails(url: string, ingredients: IIngredient[]): Promise<IOrderDetails> {
        const token = getTokenFromStorage("accessToken");
        return await this._request<IOrderDetails>(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ingredients}),
            authorization: token,
        }) ;
    }

    async checkResponse<T>(response: Response): Promise<T> {
        if (response.ok) {
            return await response.json();
        } else {
            return response.json().then((err: IResponseMessage) => Promise.reject(err))
        }
    }

    checkRequestErrorType(err: unknown): err is IResponseMessage {
        return !!(err as IResponseMessage).message
    }
}

export default new ApiClient();
