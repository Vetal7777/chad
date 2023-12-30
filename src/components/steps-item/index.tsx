import { StepStatus, type StepsItemProps } from '@/@types'
import { useMemo } from 'react'

export function StepsItem({ item, renderLine = false }: StepsItemProps) {
  const { title } = item

  const lineClass = useMemo(() => {
    return renderLine
      ? "relative after:w-2px after:left-step-line-50% after:right-step-line-50% after:top-step-line-100% after:h-100% after:absolute after:h-steps-gap after:bg-md-dark-blue-60 after:content-['']"
      : ''
  }, [renderLine])

  const indicatorClass = useMemo(() => {
    switch (item.status) {
      default:
        return 'border-md-dark-blue-60'
    }
  }, [item.status])

  const titleClass = useMemo(
    () =>
      item.status === StepStatus.none ? 'text-md-dark-blue-60' : 'text-white',
    [item.status]
  )

  return (
    <>
      <div className="flex items-center gap-4 text-base font-medium">
        <div
          className={`h-8 w-8 rounded-full border-2 ${indicatorClass} ${lineClass}`}
        />
        <p className={titleClass} children={title} />
      </div>
    </>
  )
}
