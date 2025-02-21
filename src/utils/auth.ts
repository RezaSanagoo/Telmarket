export const getAuthToken = () => {
    const token = localStorage.getItem('token')
    return token ? JSON.parse(token).access : null
  }
  
  export const getRefreshToken = () => {
    const refresh = localStorage.getItem('refresh')
    return refresh ? JSON.parse(refresh) : null
  }
  
  export const setTokens = (access: string, refresh: string) => {
    localStorage.setItem('token', JSON.stringify({ access }))
    localStorage.setItem('refresh', JSON.stringify(refresh))
  }
  
  export const clearTokens = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')
  }
  