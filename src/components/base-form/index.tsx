import { BaseFormProps } from '@/@types'
import { FormEvent } from 'react'

export function BaseForm({ children }: BaseFormProps) {
  function onSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <>
      <form
        className="max-w-120 rounded-lg bg-white px-10 py-16 shadow-auth-form"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </>
  )
}
