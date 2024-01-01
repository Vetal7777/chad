import { StepKey } from '@/@types'
import { BaseButton } from '@/components/base-button'
import { BaseForm } from '@/components/base-form'
import { BaseInput } from '@/components/base-input'
import { Logo } from '@/components/logo'
import { AuthContext } from '@/context/auth'
import { applicationName, authForm } from '@/data/content'
import { useContext, useMemo } from 'react'

export function FormContainer() {
  const { currentStep } = useContext(AuthContext)
  const welcomeStep = useMemo(
    () => currentStep === StepKey.welcome,
    [currentStep]
  )

  return (
    <>
      <div className="flex grow items-center justify-center bg-auth-container bg-cover bg-no-repeat">
        <BaseForm>
          {/* Welcome case */}
          {welcomeStep && (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 ">
                <div className="flex items-center gap-0.5 text-2xl font-semibold text-md-dark-blue-20">
                  <Logo />
                  {applicationName}
                </div>
                <div className="flex flex-col gap-4">
                  <p
                    className="text-2xl font-semibold text-md-dark-blue-20"
                    children={authForm.welcome.title}
                  />
                  <p
                    className="text-sm font-light text-md-shade-40"
                    children={authForm.welcome.description}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <BaseInput label="Email" placeholder="megachad@trychad.com" />
                <BaseInput label="Your name" placeholder="Mega Chad" />
                <BaseInput
                  password
                  label="Password"
                  placeholder="Enter password"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <BaseButton
                  title="Create account"
                  onClick={() => console.log('click')}
                />
                <div className="flex items-center justify-center gap-0.5 text-xs font-light">
                  <p children="Already have an account?" />
                  <button className="text-chad-blue-0" children="Login" />
                </div>
              </div>
            </div>
          )}
        </BaseForm>
      </div>
    </>
  )
}
