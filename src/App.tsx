import { Route, Routes } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import { AuthProvider } from './context/auth'
import { Auth } from './pages/auth'

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthProvider children={<Auth />} />} />
    </Routes>
  )
}

export default App
