import {addTokensToStorage, getTokenFromStorage} from "../../utils/localStorageHelper";

class ApiClient {
    BASE_URL = "https://norma.nomoreparties.space/api";

    async _request(url, options) {
        return fetch(url, options).then(this.checkResponse)
    }

    async signIn(url, userData) {
        const { email, password } = userData;
        return await this._request(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
    }

    async signOut(url, token) {
        return await this._request(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token}),
        });
    }

    async register(url, userData) {
        const { email, password, name } = userData;
        return await this._request(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password, name}),
        });
    }

    async refreshToken(url) {
        return await this._request(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                token: getTokenFromStorage("refreshToken"),
            })
        });
    }

    async resetPasswordOnFirstStep(url, data) {
        const { email } = data;
        return await this._request(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email}),
        });
    }

    async resetPasswordOnSecondStep(url, data) {
        const { password, code } = data;
        return await this._request(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({password, token: code}),
        });
    }

    async fetchWithRefresh(url, options) {
        try {
            return await this._request(`${this.BASE_URL}${url}`, options);
        } catch (err) {
            if (err.message === "jwt expired") {
                const refreshData = await this.refreshToken("/auth/token");
                if (!refreshData.success) {
                    await Promise.reject(refreshData);
                }
                addTokensToStorage(refreshData.accessToken, refreshData.refreshToken);
                options.headers.authorization = refreshData.accessToken;
                return await this._request(`${this.BASE_URL}${url}`, options);
            } else {
                return Promise.reject(err);
            }
        }
    }

    async getIngredients(url) {
        return await this._request(`${this.BASE_URL}${url}`);
    }

    async sendOrderDetails(url, ingredients) {
        const token = getTokenFromStorage("accessToken");
        return await this._request(`${this.BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ingredients}),
            authorization: token,
        }) ;
    }

    async checkResponse(response) {
        if (response.ok) {
            return await response.json();
        } else {
            return response.json().then((err) => Promise.reject(err))
        }
    }
}

export default new ApiClient();
