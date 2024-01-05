import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <Outlet />
      </div>
    </>
  )
}
