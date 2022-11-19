export const selectIngredientsList = (store) => store.burgerConstructor.ingredients;
export const selectBuns = (store) => store.burgerConstructor.buns;
export const selectTotalPrice = (store) => {
    const bunsTotalPrice = store.burgerConstructor.buns && store.burgerConstructor.buns.price * 2 || 0;
    const ingredientTotalPrice = store.burgerConstructor.ingredients.reduce((sum, ingredient) => {
        return sum + ingredient.price
    }, 0)
    return bunsTotalPrice + ingredientTotalPrice;
}
