import type { Metadata } from 'next'
import { teamMembers } from './team-members'
import { TeamMemberCard } from './TeamMemberCard'

export const metadata: Metadata = {
  title: 'Team',
}

export default function TeamPage() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'ValidationAgent'

  return (
    <div>
      <div className="-mx-6 -mt-6 mb-8 bg-zinc-900 px-6 py-10 text-white">
        <h1 className="text-3xl font-bold">Team 80</h1>
        <p className="mt-1 text-zinc-400">{appName}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight">Meet the Team</h2>

        <div className="mt-6 flex flex-wrap justify-center gap-8 sm:gap-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  )
}
