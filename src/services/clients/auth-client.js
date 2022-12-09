import {addTokensToStorage, getTokenFromStorage} from "../../utils/localStorageHelper";

class AuthClient {
    api = "https://norma.nomoreparties.space/api/auth/";

    async signIn(url, userData) {
        const { email, password } = userData;
        const response = await fetch(`${this.api}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
        return await this.checkResponse(response);
    }

    async signOut(url, token) {
        const response = await fetch(`${this.api}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token}),
        });
        return await this.checkResponse(response);
    }

    async register(url, userData) {
        const { email, password, name } = userData;
        const response = await fetch(`${this.api}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password, name}),
        });
        return await this.checkResponse(response);
    }

    async refreshToken(url) {
        console.log("refresh");
        const response = await fetch(`${this.api}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                token: getTokenFromStorage("refreshToken"),
            })
        });
        return await this.checkResponse(response);
    }

    async fetchWithRefresh(url, options) {
        try {
            const response = await fetch(`${this.api}${url}`, options);
            return await this.checkResponse(response);
        } catch (err) {
            console.log('error', err);
            if (err.message === "jwt expired") {
                const refreshData = await this.refreshToken("token");
                if (!refreshData.success) {
                    await Promise.reject(refreshData);
                }
                console.log("ADD NEW TOKEN");
                addTokensToStorage(refreshData.accessToken, refreshData.refreshToken);
                options.headers.authorization = refreshData.accessToken;
                const response = await fetch(`${this.api}${url}`, options);
                return await this.checkResponse(response);
            } else {
                return Promise.reject(err);
            }
        }
    }

    async checkResponse(response) {
        console.log('res', response);
        if (response.ok) {
            return await response.json();
        } else {
            return response.json().then((err) => Promise.reject(err))
        }
    }
}

export default new AuthClient();
