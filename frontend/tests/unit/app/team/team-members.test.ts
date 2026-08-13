import { describe, it, expect } from 'vitest'
import { teamMembers, getInitials } from '@/app/(dashboard)/team/team-members'

const MAX_BIO_LENGTH = 400

describe('teamMembers', () => {
  it('keeps every bio at or under the 400-character hard limit', () => {
    for (const member of teamMembers) {
      expect(
        member.bio.length,
        `${member.name}'s bio is ${member.bio.length} chars — shorten it before merging, this is not truncated at display time`,
      ).toBeLessThanOrEqual(MAX_BIO_LENGTH)
    }
  })
})

describe('getInitials', () => {
  it('takes the first letter of the first and last word', () => {
    expect(getInitials('Lachlan Dumicich')).toBe('LD')
  })

  it('handles a single-word name', () => {
    expect(getInitials('Cher')).toBe('C')
  })

  it('handles accented and non-English characters', () => {
    expect(getInitials('José García')).toBe('JG')
  })

  it('handles empty input', () => {
    expect(getInitials('')).toBe('')
  })
})
