import { FormContainer } from '@/components/form-container'
import { ProgressIndicator } from '@/components/progress-indicator'

export function Auth() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <ProgressIndicator />
        <FormContainer />
      </div>
    </>
  )
}
