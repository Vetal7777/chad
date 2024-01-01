import {
  AuthReducerAction,
  AuthReducerState,
  StepData,
  StepStatus,
  StepTitle
} from '@/@types'
import { steps } from '@/data/content'
import uuid from 'react-uuid'

function generateInitialSteps(array: StepTitle[]) {
  return array.map<StepData>((item) => ({
    ...item,
    id: uuid(),
    status: StepStatus.none
  }))
}

export const initialState = generateInitialSteps(steps)

export const authReducer = (
  state: AuthReducerState,
  action: AuthReducerAction
) => {
  const { type, payload } = action

  switch (type) {
    case 'UPDATE_AUTH_STEPS':
      return [...state].map((item) => (item.id === payload.id ? payload : item))

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`)
  }
}
