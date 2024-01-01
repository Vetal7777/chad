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

export type AuthReducerActionType = 'UPDATE_AUTH_STEPS'

export type AuthReducerActionPayload = StepData

export type AuthContextValue = {
  steps: StepData[]
  setActiveStatus: (id: string) => void
  setCompletedStatus: (id: string) => void
  setSuccessStatus: (id: string) => void
}
