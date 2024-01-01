import { PasswordVisibilityButtonProps } from '@/@types'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export function PasswordVisibilityButton({
  value,
  onClick
}: PasswordVisibilityButtonProps) {
  return (
    <>
      <button className="absolute right-2.5 h-full">
        {value && <FiEyeOff className="stroke-md-shade-40" onClick={onClick} />}

        {!value && <FiEye className="stroke-md-shade-40" onClick={onClick} />}
      </button>
    </>
  )
}
