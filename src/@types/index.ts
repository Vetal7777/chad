export type OnboardingStat = {
  title: string
  description: string
}

export type StepTitle = {
  title: string
}

export type StepStatusValue = keyof typeof StepStatus

export enum StepStatus {
  active = 'active',
  completed = 'completed',
  success = 'success',
  none = 'none'
}

export type StepData = {
  id: string
  status: StepStatusValue
} & StepTitle

export type StepsItemProps = {
  item: StepData
  renderLine?: boolean
}

export type AuthReducerState = StepData[]

export type AuthProviderProps = {
  children: JSX.Element
}

export type AuthReducerAction = {
  type: AuthReducerActionType
  payload: AuthReducerActionPayload
}

export enum AuthReducerActionCase {
  updateStep = 'UPDATE_AUTH_STEP'
}

export type AuthReducerActionType = AuthReducerActionCase.updateStep

export type AuthReducerActionPayload = StepData

export type AuthContextValue = {
  steps: StepData[]
  setActiveStatus: (id: string) => void
  setCompletedStatus: (id: string) => void
  setSuccessStatus: (id: string) => void
}

export type BaseInputProps = {
  label?: string
  placeholder?: string
  value?: string
  password?: true
}

export type PasswordVisibilityButtonProps = {
  onClick: () => void
  value: boolean
}

export type BaseButtonProps = {
  title: string
  onClick: () => void
}
