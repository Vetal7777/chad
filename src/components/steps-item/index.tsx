import { StepStatus, type StepsItemProps } from '@/@types'
import { useMemo } from 'react'
import './steps-item.scss'

export function StepsItem({ item, renderLine }: StepsItemProps) {
  const withoutLineClass = renderLine ? '' : 'line-hidden'

  const { title, status } = item
  const statusClass = useMemo(() => {
    switch (status) {
      case StepStatus.active:
        return 'active'
      default:
        return ''
    }
  }, [status])

  return (
    <>
      <div
        className={`flex items-center gap-4 text-base font-medium ${statusClass}`}
      >
        <div
          className={`after:h-100% relative h-8 w-8 rounded-full border-2 border-md-dark-blue-60 after:absolute after:left-step-line-50% after:right-step-line-50% after:top-step-line-100% after:h-steps-gap after:w-2px after:bg-md-dark-blue-60  after:content-[''] ${withoutLineClass}`}
        />
        <p
          className="step__title font-light text-md-dark-blue-60"
          children={title}
        />
      </div>
    </>
  )
}
