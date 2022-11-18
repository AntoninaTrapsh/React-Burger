class IngredientsClient {
    api = 'https://norma.nomoreparties.space/api/';

    async getIngredients(url) {
        const response = await fetch(`${this.api}${url}`);
        return await this.checkResponse(response);
    }

    async sendOrderDetails(url, ingredients) {
        const response = await fetch(`${this.api}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ingredients}),
        }) ;
        return await this.checkResponse(response);
    }

    async checkResponse(response) {
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("There was a problem, can't get data from server");
        }
    }
}

export default new IngredientsClient();
