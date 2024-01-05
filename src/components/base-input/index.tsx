import type { BaseInputProps } from '@/@types'
import { PasswordVisibilityButton } from '@/components/password-visibility-button'
import { useEffect, useMemo, useState } from 'react'

const INPUT_TYPES = {
  password: 'password',
  text: 'text'
}

export function BaseInput({
  label,
  placeholder,
  value,
  password,
  onChange
}: BaseInputProps) {
  const initialType = getInitalType()
  const [currentType, setCurrentType] = useState(initialType)

  const showPassword = useMemo(
    () => currentType !== INPUT_TYPES.password,
    [currentType]
  )

  function getInitalType() {
    return password ? INPUT_TYPES.password : INPUT_TYPES.text
  }

  function toggleType() {
    if (showPassword) {
      setCurrentType(INPUT_TYPES.password)
    } else {
      setCurrentType(INPUT_TYPES.text)
    }
  }

  useEffect(() => {
    if (password) {
      toggleType()
    }
  }, [])

  return (
    <>
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-xs text-md-shade-40" children={label} />
        )}
        <div className="relative">
          <input
            type={currentType}
            className="w-full rounded bg-md-shade-100 px-4.25 py-2.5 outline-none placeholder:text-base placeholder:text-md-shade-80"
            value={value}
            placeholder={placeholder}
            onChange={({ target }) => onChange(target.value)}
          />

          {password && (
            <PasswordVisibilityButton
              value={showPassword}
              onClick={toggleType}
            />
          )}
        </div>
      </div>
    </>
  )
}
