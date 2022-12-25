export function addTokensToStorage(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
}

export function removeTokensFromStorage(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}

export function getTokenFromStorage(key: string): string | null {
    return localStorage.getItem(key);
}
