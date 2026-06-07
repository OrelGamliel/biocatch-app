import { useEffect } from 'react'
import { useSession } from '../context/SessionContext'

export const useSDK = (screenName: string) => {
  const { csid } = useSession()

  useEffect(() => {
    window.cdApi?.setCustomerSessionId(csid)
    window.cdApi?.changeContext(screenName)
    console.log('SDK context -> %c' + screenName + '%c | csid: %c' + csid, 'color: blue; font-weight: bold', 'color: inherit; font-weight: normal', 'color: red; font-weight: bold')
  }, [csid, screenName])
}
