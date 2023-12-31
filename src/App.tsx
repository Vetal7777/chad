import { Route, Routes } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import { Auth } from './pages/auth'

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
