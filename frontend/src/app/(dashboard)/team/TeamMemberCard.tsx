'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { getInitials, type TeamMember } from './team-members'

const BIO_TRUNCATE_LENGTH = 200

export function TeamMemberCard({ name, role, bio, photo }: TeamMember) {
  const [expanded, setExpanded] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const isLong = bio.length > BIO_TRUNCATE_LENGTH
  const showPlaceholder = !photo || imageError

  return (
    <div
      className={cn(
        'flex w-full min-w-0 flex-none flex-col items-center justify-start rounded-xl border border-zinc-500 px-8 pt-6 pb-8 text-center sm:max-w-72 sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(25%-0.75rem)] dark:border-zinc-500',
        !expanded && 'min-h-[460px]',
      )}
    >
      <div className="relative flex aspect-square w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        {showPlaceholder ? (
          <span className="text-3xl font-bold text-zinc-500 dark:text-zinc-400">
            {getInitials(name)}
          </span>
        ) : (
          <>
            {imageLoading && <span className="absolute text-sm text-zinc-400">Loading…</span>}
            <Image
              src={photo}
              alt={name}
              fill
              sizes="160px"
              className="object-cover"
              onLoad={() => setImageLoading(false)}
              onError={() => setImageError(true)}
            />
          </>
        )}
      </div>
      <h3 className="mt-4 w-full text-lg font-bold break-words">{name}</h3>
      <span className="mt-2 inline-flex min-w-24 items-center justify-center rounded-full bg-zinc-300 px-3 py-1 text-sm font-medium whitespace-nowrap text-zinc-900 dark:bg-zinc-700 dark:text-zinc-100">
        {role}
      </span>
      <p
        className={cn(
          'mt-4 w-full text-sm break-words text-zinc-950 dark:text-zinc-50',
          isLong && !expanded && 'line-clamp-6',
        )}
      >
        {bio}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 inline-flex w-24 items-center justify-center text-sm font-semibold underline"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      {isLong && !expanded && <div aria-hidden className="h-0 sm:h-20" />}
    </div>
  )
}
