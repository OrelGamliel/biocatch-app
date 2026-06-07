import { useNavigate } from 'react-router-dom'
import { useSDK } from '../../hooks/useSDK'
import styles from './Home.module.css'

const Home = () => {
  const navigate = useNavigate()
  useSDK('home_screen')

  return (
    <div className={styles.page}>
      <h1>Welcome</h1>
      <p>Simulate a secure banking session.</p>
      <button className={styles.btn} onClick={() => navigate('/login')}>
        Go to Login
      </button>
    </div>
  )
}

export default Home
