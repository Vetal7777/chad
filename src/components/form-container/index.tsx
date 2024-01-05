import { StepKey, StepStatus, type WelcomeFormData } from '@/@types'
import { BaseButton } from '@/components/base-button'
import { BaseForm } from '@/components/base-form'
import { BaseInput } from '@/components/base-input'
import { Logo } from '@/components/logo'
import { AuthContext } from '@/context/auth'
import { applicationName } from '@/data/content'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function FormContainer() {
  const { t } = useTranslation()

  const { currentStep, steps, setSuccessStatus, setActiveStatus } =
    useContext(AuthContext)

  const [welcomeFormData, setWelcomeFormData] = useState<WelcomeFormData>({
    email: '',
    name: '',
    password: ''
  })

  const welcomeCase = useMemo(
    () => currentStep === StepKey.welcome,
    [currentStep]
  )
  const welcomeFormIsFilled = useMemo(
    () => Object.values(welcomeFormData).every((input) => input),
    [welcomeFormData]
  )

  useEffect(() => {
    if (welcomeCase) {
      const step = steps.find(({ key }) => key === currentStep)

      if (!step) return

      const status = step.status
      const activeStatus = status === StepStatus.active

      if (welcomeFormIsFilled && activeStatus) {
        setSuccessStatus(step.id)
      } else {
        setActiveStatus(step.id)
      }
    }
  }, [welcomeFormIsFilled])

  return (
    <>
      <div className="flex grow items-center justify-center bg-auth-container bg-cover bg-no-repeat">
        <BaseForm>
          {/* Welcome case */}
          {welcomeCase && (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 ">
                <div className="flex items-center gap-0.5 text-2xl font-semibold text-md-dark-blue-20">
                  <Logo />

                  {applicationName}
                </div>

                <div className="flex flex-col gap-4">
                  <p
                    className="text-2xl font-semibold text-md-dark-blue-20"
                    children={t('auth.form.welcome.title')}
                  />

                  <p
                    className="text-sm font-light text-md-shade-40"
                    children={t('auth.form.welcome.description')}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <BaseInput
                  label={t('auth.form.welcome.input.email.label')}
                  placeholder={t('auth.form.welcome.input.email.placeholder')}
                  value={welcomeFormData.email}
                  onChange={(email) =>
                    setWelcomeFormData({ ...welcomeFormData, email })
                  }
                />

                <BaseInput
                  label={t('auth.form.welcome.input.name.label')}
                  placeholder={t('auth.form.welcome.input.name.placeholder')}
                  value={welcomeFormData.name}
                  onChange={(name) =>
                    setWelcomeFormData({ ...welcomeFormData, name })
                  }
                />

                <BaseInput
                  password
                  label={t('auth.form.welcome.input.password.label')}
                  placeholder={t(
                    'auth.form.welcome.input.password.placeholder'
                  )}
                  value={welcomeFormData.password}
                  onChange={(password) =>
                    setWelcomeFormData({ ...welcomeFormData, password })
                  }
                />
              </div>

              <div className="flex flex-col items-center gap-4">
                <BaseButton
                  title={t('auth.form.welcome.submit_button.title')}
                  onClick={() => console.log('click')}
                />

                <div className="flex items-center justify-center gap-0.5 text-xs font-light">
                  <p children={t('auth.form.welcome.footer.message')} />

                  <button
                    className="text-chad-blue-0"
                    children={t('auth.form.welcome.footer.button')}
                  />
                </div>
              </div>
            </div>
          )}
        </BaseForm>
      </div>
    </>
  )
}
