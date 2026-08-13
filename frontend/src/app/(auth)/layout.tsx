import type { Metadata } from 'next'
import { AuthBrandPanel } from './AuthBrandPanel'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'ValidationAgent'

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex flex-col bg-zinc-900 p-6 text-white lg:hidden">
        <h2 className="text-base font-semibold">{appName}</h2>
        <p className="text-sm text-zinc-400">Team 80</p>
      </div>
      <AuthBrandPanel appName={appName} />
      <div className="flex flex-1 items-center justify-center bg-white px-4 py-10 dark:bg-zinc-950">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}
