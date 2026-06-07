import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../../context/SessionContext'
import { useSDK } from '../../hooks/useSDK'
import { callGetScore } from '../../services/api'
import styles from './MakePayment.module.css'

const MakePayment = () => {
  const navigate = useNavigate()
  const { csid, initCalled } = useSession()
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  useSDK('payment_screen')

  const handlePayment = async () => {
    if (!initCalled) {
      setStatus('Please log in first.')
      return
    }
    setLoading(true)
    setStatus(null)
    try {
      await callGetScore(csid)
      setStatus('Payment scored successfully')
      setTimeout(() => navigate('/account'), 800)
    } catch (err) {
      setStatus(`Error: ${err instanceof Error ? err.message : 'unknown'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <h1>Make Payment</h1>
      <div className={styles.form}>
        <input className={styles.input} type="text" placeholder="Recipient" defaultValue="Shlomi Shkalim" />
        <input className={styles.input} type="number" placeholder="Amount ($)" defaultValue="250" />
        <button className={styles.btn} onClick={handlePayment} disabled={loading}>
          {loading ? 'Processing...' : 'Confirm Payment'}
        </button>
        <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => navigate('/account')}>
          Cancel
        </button>
        {status && <p className={styles.status}>{status}</p>}
      </div>
    </div>
  )
}

export default MakePayment
