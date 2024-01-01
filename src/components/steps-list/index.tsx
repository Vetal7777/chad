import { AuthContext } from '@/context/auth'
import { useContext } from 'react'
import uuid from 'react-uuid'
import { StepsItem } from '../steps-item'

export function StepsList() {
  const { steps } = useContext(AuthContext)

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
