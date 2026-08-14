# Design Validation — Team Page and Login

Team 80 · Checked by Wallace Tjang (BA) · 12 August 2026

Design by Dan Pham · Checked against the requirements document

## Outcome

**Approved. No gaps going back to UX.**

Every field is on the page, the login mockup has stayed inside styling only, and both awkward cases I flagged have a visible design treatment. The card moves to Lachlan.

There are a few things at the end that were not settled at design stage because they are build decisions rather than design ones. They are listed so they get checked when the pages are built and tested, not because anything is missing from the design.

## 1. Is every field represented?

Checked each field in the requirements document against the team page mockup.

| **Field**    | **In the design?** | **Notes**                                                                                                                             |
| --- | --- | --- |
| Team name    | Yes                | "Team 80" in the header bar.                                                                                                          |
| Project name | Yes                | "ValidationAgent" underneath it.                                                                                                      |
| Member name  | Yes                | All four, full names, none cut off.                                                                                                   |
| Photo        | Yes                | Three real photos, one placeholder. All the same size and shape.                                                                      |
| Role         | Yes                | Badge under each name. PM, BA, UX/Dev 2, Dev 1 — all from the agreed list, and the combined role is joined with a slash as specified. |
| Blurb        | Yes                | Sits under the role. All four written in third person, which is what the doc asks for.                                                |
| Card order   | Yes                | PM, BA, UX, Dev 1. Matches the order in the requirements exactly.                                                                     |

**All seven fields present and correct. Nothing missing.**

## 2. Does the login mockup stay styling-only?

Compared the new mockups against the original login screen included in the Figma file.

| **Check**                        | **Result**                                                                                                                             |
| --- | --- |
| Both sign-in options still there | Yes. "Continue with Google" is present in every state, alongside email and password.                                                   |
| No new functionality added       | Yes. Nothing new has appeared — no password reset, no "remember me", no extra sign-in providers.                                       |
| Existing links kept              | Yes. "Don't have an account? Create one" is in the original and has been kept. Removing it would have been the change, not keeping it. |
| Same fields, same order          | Yes. Google first, then email and password, same as the original.                                                                      |
| Error handling looks the same    | Yes. Same points of failure, just styled differently. The wording and when it appears have not changed.                                |
| Labels still visible             | Yes. "Email" and "Password" are proper labels, not placeholder text.                                                                   |

**Login scope confirmed unchanged. This is a restyle and nothing more.**

Worth recording that the original login is dark and the new design is light. That is a deliberate design decision and I am happy with it. Dark mode is out of scope in the requirements, so noting it here rather than leaving it unexplained.

## 3. Do the edge cases have a visible design treatment?

These are the two cases I specifically asked to be designed for, plus the layout constraints from the requirements.

| **Edge case**                  | **Treated?** | **Notes**                                                                                                                               |
| --- | --- | --- |
| Member with no photo           | Yes          | Lachlan's card shows an "LD" initials placeholder, same size and shape as the real photos, so nothing shifts when a card uses it.       |
| Blurb over 200 characters      | Yes          | Dan's blurb is clamped with a "Read more" underneath. The other three sit under 200 and show in full with no control, which is correct. |
| Cards the same height in a row | Yes          | All four cards are level regardless of blurb length.                                                                                    |
| Photos all the same size       | Yes          | Including the placeholder.                                                                                                              |

**Both edge cases have a visible treatment. Approved.**

## 4. Notes for the build

Not design problems and not holding anything up. These are things the design deliberately left open, or that can only be confirmed on a real screen rather than in a mockup. Logging them so they get picked up at build and test rather than forgotten.

### Responsive layout

Only the desktop team page was mocked up, which is fine — the requirements leave layout to Dan and only ask that it works on a phone, a tablet and a desktop. Four cards across clearly will not hold on a phone, so Lachlan builds it responsive and Dan checks it at all three sizes during testing.

### The expanded "Read more"

The collapsed state is designed and matches the requirements. What still needs confirming at build time is that opening one card does not push the others out of line, since all four currently sit level. Something for Dan to check when he tests rather than something that needed drawing.

### Failed login on mobile

On desktop the failed-login state keeps the email that was typed in. On mobile it shows the empty placeholder. Keeping the email is the better behaviour, so worth building it that way on both.

## 5. Still open

Neither of these affects the design approval, but both need resolving before or during the build.

### The standalone page decision

Dan built the team page as a standalone page rather than inside the existing app shell, and flagged it in his handoff.

What Lachlan needs to know: a page inside the existing shell inherits its login protection automatically. A standalone page does not, so that protection has to be added deliberately. It is not a scope problem, since the team page is new work rather than login work, but it does need to actually happen or the page will be reachable without signing in.

### Where login redirects to

Still with Kuli. Dan building the team page on its own route makes this more relevant rather than less. Lachlan is blocked on it.
