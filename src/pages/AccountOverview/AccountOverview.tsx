import { useNavigate } from 'react-router-dom'
import { useSDK } from '../../hooks/useSDK'
import styles from './AccountOverview.module.css'

const AccountOverview = () => {
  const navigate = useNavigate()
  useSDK('account_overview_screen')

  return (
    <div className={styles.page}>
      <h1>Account Overview</h1>
      <div className={styles.card}>
        <span className={styles.label}>Balance</span>
        <span className={styles.balance}>$12,450.00</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={() => navigate('/payment')}>
          Make Payment
        </button>
        <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => navigate('/logout')}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default AccountOverview
