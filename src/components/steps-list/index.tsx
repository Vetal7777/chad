import { StepStatus, type StepData, type StepTitle } from '@/@types'
import { StepsItem } from '@/components/steps-item'
import { steps as stepsData } from '@/data/content'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'

export function StepsList() {
  //TODO: toggle useState to useReducer
  const [steps, setSteps] = useState(generateInitialSteps(stepsData))

  useEffect(
    () => {},
    [
      //TODO: set first step is active
    ]
  )

  function generateInitialSteps(array: StepTitle[]) {
    return array.map<StepData>((item) => ({
      ...item,
      id: uuid(),
      status: StepStatus.none
    }))
  }

  return (
    <>
      <div className="flex flex-col gap-steps-gap">
        {steps.map((step, index) => {
          const renderLine = index !== steps.length - 1

          return <StepsItem item={step} key={uuid()} renderLine={renderLine} />
        })}
      </div>
    </>
  )
}
