class AuthClient {
    api = "https://norma.nomoreparties.space/api/auth";

    async signIn(url) {
        const response = await fetch(`${this.api}${url}`);
        await this.checkResponse(response);
    }

    async signOut(url) {
        const response = await fetch(`${this.api}${url}`);
        await this.checkResponse(response);
    }

    async register(url) {
        const response = await fetch(`${this.api}${url}`);
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
