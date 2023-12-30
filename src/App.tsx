import { FormContainer } from '@/components/form-container'
import { ProgressIndicator } from '@/components/progress-indicator'
import 'swiper/css'
import 'swiper/css/pagination'

function App() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <ProgressIndicator />
        <FormContainer />
      </div>
    </>
  )
}

export default App
