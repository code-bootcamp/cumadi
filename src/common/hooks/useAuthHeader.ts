import { useEffect, useState } from 'react'

export const useAuthHeader = () => {
  const [authHeader, setAuthHeader] = useState('')
  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken')
    if (accessToken) setAuthHeader(accessToken)
    console.log(accessToken)
  }, [])

  const API_HEADERS = {
    authorization: authHeader,
    'Content-Type': 'application/json',
  }
  return { API_HEADERS }
}
