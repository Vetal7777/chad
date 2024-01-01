import { StepKey } from '@/@types'
import { FormContainer } from '@/components/form-container'
import { ProgressIndicator } from '@/components/progress-indicator'
import { AuthContext } from '@/context/auth'
import { useContext, useEffect } from 'react'

export function Auth() {
  const { steps, setActiveStatus } = useContext(AuthContext)

  useEffect(() => {
    const currentStep = steps.find(({ key }) => key === StepKey.welcome)

    if (!currentStep)
      throw new Error('Cannot find current step in Auth onMounted hook')

    const currentStepId = currentStep.id
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
