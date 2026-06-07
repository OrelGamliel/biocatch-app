import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../../context/SessionContext'
import { useSDK } from '../../hooks/useSDK'
import { callInit } from '../../services/api'
import styles from './Login.module.css'

const Login = () => {
  const navigate = useNavigate()
  const { csid, setInitCalled } = useSession()
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  useSDK('login_screen')

  const handleLogin = async () => {
    setLoading(true)
    setStatus(null)
    try {
      await callInit(csid)
      setInitCalled(true)
      setStatus('Session initialised')
      setTimeout(() => navigate('/account'), 800)
    } catch (err) {
      setStatus(`Error: ${err instanceof Error ? err.message : 'unknown'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <h1>Login</h1>
      <div className={styles.form}>
        <input className={styles.input} type="text" placeholder="Username" defaultValue="demo_user" />
        <input className={styles.input} type="password" placeholder="Password" defaultValue="********" />
        <button className={styles.btn} onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in..' : 'Login'}
        </button>
        {status && <p className={styles.status}>{status}</p>}
      </div>
    </div>
  )
}

export default Login
