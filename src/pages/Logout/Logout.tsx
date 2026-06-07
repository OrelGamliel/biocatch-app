import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../../context/SessionContext'
import { useSDK } from '../../hooks/useSDK'
import styles from './Logout.module.css'

const Logout = () => {
  const navigate = useNavigate()
  const { resetSession } = useSession()
  useSDK('logout_screen')

  useEffect(() => {
    resetSession()
  }, [])

  return (
    <div className={styles.page}>
      <h1>Logged Out</h1>
      <button className={styles.btn} onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  )
}

export default Logout
