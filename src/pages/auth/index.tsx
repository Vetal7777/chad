import { FormContainer } from '@/components/form-container'
import { ProgressIndicator } from '@/components/progress-indicator'
import { AuthContext } from '@/context/auth'
import { useContext, useEffect } from 'react'

export function Auth() {
  const { steps, setActiveStatus } = useContext(AuthContext)

  useEffect(() => {
    const currentStepId = steps[0].id
    setActiveStatus(currentStepId)
  }, [])

  return (
    <>
      <div className="flex h-screen w-screen">
        <ProgressIndicator />
        <FormContainer />
      </div>
    </>
  )
}
