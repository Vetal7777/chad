import type { BaseButtonProps } from '@/@types'

export function BaseButton({ title, onClick }: BaseButtonProps) {
  return (
    <>
      <button
        className="p-2.75 flex w-full items-center justify-center rounded-lg bg-chad-blue-0 font-light text-white"
        children={title}
        onClick={onClick}
      />
    </>
  )
}
