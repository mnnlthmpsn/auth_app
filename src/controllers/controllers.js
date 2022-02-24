export const setJWTInStorage = token => {
    sessionStorage.setItem('qqrv', JSON.stringify(token))
}
