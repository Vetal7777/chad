import { AuthProvider } from '@/context/auth'
import '@/i18n/config'
import { Auth } from '@/pages/auth'
import { Home } from '@/pages/home'
import { Route, Routes } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import { MainLayout } from './layouts/main'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthProvider children={<Auth />} />} />
      </Route>
    </Routes>
  )
}

export default App
