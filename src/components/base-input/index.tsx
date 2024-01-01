import { BaseInputProps } from '@/@types'
import { useEffect, useMemo, useState } from 'react'
import { PasswordVisibilityButton } from '../password-visibility-button'

const INPUT_TYPES = {
  password: 'password',
  text: 'text'
}

export function BaseInput({
  label,
  placeholder,
  value,
  password
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
          <label className="text-md-shade-40 text-xs" children={label} />
        )}
        <div className="relative">
          <input
            type={currentType}
            className="placeholder:text-md-shade-80 px-4.25 bg-md-shade-100 w-full rounded py-2.5 outline-none placeholder:text-base"
            value={value}
            placeholder={placeholder}
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
