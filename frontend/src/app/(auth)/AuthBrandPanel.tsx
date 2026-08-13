'use client'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function AuthBrandPanel({ appName }: { appName: string }) {
  const pathname = usePathname()
  const isSignIn = pathname === '/auth/signin'

  return (
    <div
      className={cn(
        'hidden flex-col justify-between bg-zinc-900 p-10 text-white lg:flex',
        isSignIn ? 'w-full max-w-[480px]' : 'w-full max-w-sm',
      )}
    >
      <div>
        <h2 className={cn('font-semibold', isSignIn ? 'text-3xl' : 'text-base')}>{appName}</h2>
        <p className={cn('text-zinc-400', isSignIn ? 'text-xl' : 'text-sm')}>Team 80</p>
      </div>
      <p className={cn(isSignIn ? 'text-lg text-zinc-200' : 'text-sm text-zinc-400')}>
        Traceable, reproducible validation for structured BIM project data.
      </p>
    </div>
  )
}
