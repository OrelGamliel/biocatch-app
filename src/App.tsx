import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SessionProvider } from './context/SessionContext'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import AccountOverview from './pages/AccountOverview/AccountOverview'
import MakePayment from './pages/MakePayment/MakePayment'
import Logout from './pages/Logout/Logout'

const App = () => (
  <SessionProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountOverview />} />
        <Route path="/payment" element={<MakePayment />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </SessionProvider>
)

export default App
