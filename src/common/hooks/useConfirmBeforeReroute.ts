import { useEffect } from 'react'

export const useConfirmBeforeReroute = () => {
  useEffect(() => {
    window.addEventListener('beforeunload', preventClose)

    return () => {
      window.removeEventListener('beforeunload', preventClose)
    }
  }, [])

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault()
    e.returnValue = ''
  }
}
