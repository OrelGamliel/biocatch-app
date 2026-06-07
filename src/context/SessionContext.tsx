import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

const generateCsid = (): string => crypto.randomUUID()

interface SessionContextValue {
  csid: string
  initCalled: boolean
  setInitCalled: (v: boolean) => void
  resetSession: () => void
}

const SessionContext = createContext<SessionContextValue | null>(null)

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [csid, setCsid] = useState<string>(generateCsid)
  const [initCalled, setInitCalled] = useState(false)

  useEffect(() => {
    console.log('%cSession CSID: ' + csid, 'color: red; font-weight: bold')
  }, [csid])

  const resetSession = () => {
    setCsid(generateCsid())
    setInitCalled(false)
  }

  return (
    <SessionContext.Provider value={{ csid, initCalled, setInitCalled, resetSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = (): SessionContextValue => {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('must be used inside SessionProvider')
  return ctx
}
