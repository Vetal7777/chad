import { Logo } from '@/components/logo'
import { applicationName, authForm } from '@/data/content'
import { FormEvent } from 'react'
import { BaseInput } from '../base-input'

export function Form() {
  function onSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <>
      <form
        className="shadow-auth-form max-w-120 flex flex-col gap-8 rounded-lg bg-white px-10 py-16"
        onSubmit={onSubmit}
      >
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
              className="text-md-shade-40 text-sm font-light"
              children={authForm.welcome.description}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <BaseInput label="Email" placeholder="megachad@trychad.com" />
          <BaseInput label="Your name" placeholder="Mega Chad" />
          <BaseInput password label="Password" placeholder="Enter password" />
        </div>
      </form>
    </>
  )
}
