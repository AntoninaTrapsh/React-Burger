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
        await this.checkResponse(response);
    }

    async signOut(url, token) {
        const response = await fetch(`${this.api}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token}),
        });
        await this.checkResponse(response);
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
        await this.checkResponse(response);
    }

    async refreshToken(url) {
        const response = await fetch(`${this.api}${url}`);
        await this.checkResponse(response);
    }

    async checkResponse(response) {
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("There was a problem, try again later");
        }
    }
}

export default new AuthClient();
