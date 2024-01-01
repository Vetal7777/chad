import { FormContainer } from '@/components/form-container'
import { ProgressIndicator } from '@/components/progress-indicator'
import { AuthProvider } from '@/context/auth/context'

export function Auth() {
  return (
    <>
      <AuthProvider>
        <div className="flex h-screen w-screen">
          <ProgressIndicator />
          <FormContainer />
        </div>
      </AuthProvider>
    </>
  )
}
