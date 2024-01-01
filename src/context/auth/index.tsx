import {
  AuthContextValue,
  AuthProviderProps,
  StepData,
  StepStatus
} from '@/@types'
import { authReducer, initialState } from '@/context/auth/reducer'
import { createContext, useReducer } from 'react'

export const AuthContext = createContext<AuthContextValue>({
  steps: initialState,
  setActiveStatus: () => null,
  setCompletedStatus: () => null,
  setSuccessStatus: () => null
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  function setActiveStatus(id: string) {
    updateStepStatus(id, StepStatus.active)
  }

  function setCompletedStatus(id: string) {
    updateStepStatus(id, StepStatus.completed)
  }

  function setSuccessStatus(id: string) {
    updateStepStatus(id, StepStatus.success)
  }

  function updateStepStatus(id: string, status: StepStatus) {
    const updatedStep = state.find(({ id: stepId }) => stepId === id)

    if (!updatedStep) {
      throw new Error(`No case for current step in updateStepStatus.`)
    }

    updateStep({ ...updatedStep, status })
  }

  function updateStep(step: StepData) {
    dispatch({
      type: 'UPDATE_AUTH_STEPS',
      payload: step
    })
  }

  const value: AuthContextValue = {
    steps: state,
    setActiveStatus,
    setCompletedStatus,
    setSuccessStatus
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
