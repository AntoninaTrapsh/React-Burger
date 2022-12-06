export function addTokensToStorage(accessToken, refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
}

export function removeTokensFromStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}

export function getTokenFromStorage(key) {
    localStorage.getItem(key);
}
