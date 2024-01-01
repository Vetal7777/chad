import { StepStatus, type StepsItemProps } from '@/@types'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import './steps-item.scss'

export function StepsItem({ item, renderLine }: StepsItemProps) {
  const { t } = useTranslation()

  const lineClass = renderLine ? 'line' : ''
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
          className={`point after:h-100% relative h-8 w-8 rounded-full border-2 border-md-dark-blue-60 ${lineClass} `}
        />
        <p
          className="title font-light text-md-dark-blue-60"
          children={t(title)}
        />
      </div>
    </>
  )
}
