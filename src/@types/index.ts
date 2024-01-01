export enum AuthReducerActionCase {
  updateStep = 'UPDATE_AUTH_STEP'
}

export enum StepKey {
  welcome = 'welcome',
  shopifyConnection = 'shopifyConnection',
  supportEmailConnection = 'supportEmailConnection',
  success = 'success'
}

export enum StepStatus {
  active = 'active',
  completed = 'completed',
  success = 'success',
  none = 'none'
}

export type StepKeyValue = keyof typeof StepKey

export type StepStatusValue = keyof typeof StepStatus

export type StepsItemProps = {
  item: StepData
  renderLine?: boolean
}
export type BaseInputProps = {
  label?: string
  placeholder?: string
  value?: string
  password?: true
}

export type PasswordVisibilityButtonProps = {
  onClick: VoidFunc
  value: boolean
}

export type BaseButtonProps = {
  title: string
  onClick: VoidFunc
}

export type BaseFormProps = {
  children?: JSX.Element | false
}

export type AuthProviderProps = {
  children: JSX.Element
}

export type VoidFunc = () => void

export type OnboardingStat = {
  title: string
  description: string
}

export type StepTitle = {
  title: string
  key: StepKeyValue
}

export type StepData = {
  id: string
  status: StepStatusValue
} & StepTitle

export type AuthReducerState = {
  steps: StepData[]
  currentStep: StepKeyValue
}

export type AuthReducerAction = {
  type: AuthReducerActionType
  payload: AuthReducerActionPayload
}

export type AuthReducerActionType = AuthReducerActionCase.updateStep

export type AuthReducerActionPayload = StepData

export type AuthContextValue = {
  steps: StepData[]
  currentStep: StepKeyValue
  setActiveStatus: (id: string) => void
  setCompletedStatus: (id: string) => void
  setSuccessStatus: (id: string) => void
}
