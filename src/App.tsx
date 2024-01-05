import { AuthProvider } from '@/context/auth'
import '@/i18n/config'
import { MainLayout } from '@/layouts/main'
import { Auth } from '@/pages/auth'
import { Route, Routes } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<AuthProvider children={<Auth />} />} />
      </Route>
    </Routes>
  )
}

export default App
