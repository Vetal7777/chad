import type { StepsItemProps } from '@/@types'
import './steps-item.scss'

export function StepsItem({ item, renderLine }: StepsItemProps) {
  const { title } = item

  const withoutLineClass = renderLine ? '' : 'line-hidden'

  return (
    <>
      <div className="flex items-center gap-4 text-base font-medium">
        <div
          className={`after:h-100% relative h-8 w-8 rounded-full border-2 border-md-dark-blue-60 after:absolute after:left-step-line-50% after:right-step-line-50% after:top-step-line-100% after:h-steps-gap after:w-2px after:bg-md-dark-blue-60  after:content-[''] ${withoutLineClass}`}
        />
        <p className={`text-md-dark-blue-60`} children={title} />
      </div>
    </>
  )
}
