export type TeamMember = {
  name: string
  role: string
  bio: string
  photo?: string
}

export function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return ''
  const first = Array.from(words[0] ?? '')[0] ?? ''
  const last = words.length > 1 ? (Array.from(words[words.length - 1] ?? '')[0] ?? '') : ''
  return (first + last).toUpperCase()
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Kuli Ekanayake',
    role: 'PM',
    bio: 'Kuli is the PM on Team 80, coordinating scope with the client and keeping the rest of the team aligned on what ships next.',
    photo: '/images/team/kuli-ekanayake.jpg',
  },
  {
    name: 'Wallace Tjang',
    role: 'BA',
    bio: 'Wallace is the BA on Team 80, working out what the client actually needs and writing it down so it can be tested against.',
    photo: '/images/team/wallace-tjang.jpg',
  },
  {
    name: 'Dan Pham',
    role: 'UX/Dev 2',
    bio: 'Dan works across UX and Dev 2 on Team 80, turning the requirements into interface designs and then building the pages that implement them. Particularly interested in keeping the gap between a design handoff and the shipped page as small as possible, so what the client signs off on is what they actually get.',
    photo: '/images/team/dan-pham.png',
  },
  {
    name: 'Lachlan Dumicich',
    role: 'Dev 1',
    bio: 'Lachlan is Dev 1 on Team 80, building out the pages and wiring them up to the validation checks the team defines.',
    photo: '/images/team/lachlan-dumicich.jpg',
  },
]
