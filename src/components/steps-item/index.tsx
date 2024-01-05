import { StepStatus, type StepsItemProps } from '@/@types'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheck } from 'react-icons/fa6'
import './steps-item.scss'

export function StepsItem({ item, renderLine }: StepsItemProps) {
  const { t } = useTranslation()

  const lineClass = renderLine ? 'line' : ''
  const { title, status } = item

  const successStatus = useMemo(() => status === StepStatus.success, [status])

  const statusClass = useMemo(() => {
    switch (status) {
      case StepStatus.active:
        return 'active'
      case StepStatus.success:
        return 'success'
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
          className={`p-0.75 point after:h-100% relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-md-dark-blue-60 ${lineClass}`}
        >
          {successStatus && (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-chad-blue-0">
              <FaCheck className="h-3 w-3 fill-white" />
            </div>
          )}
        </div>

        <p
          className="title font-light text-md-dark-blue-60"
          children={t(title)}
        />
      </div>
    </>
  )
}
