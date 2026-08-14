# Requirements — Team Page and Login Styling

Team 80 · Written by Wallace Tjang (BA) · 12 August 2026

Repo: github.com/danphm/garage-boilerplate-basic

## What this document is for

This sets out what goes on the team page, what we are and are not allowed to change on the login page, and the awkward cases we need to handle. UX designs from this, the devs build from it, and it gets checked against this when the design comes back.

If something is not written here, it is not a requirement. If we change our minds later, this document gets updated first.

One thing worth clearing up early: the Planner card says "Bootstrap restyling", but that means bootstrapping the project, not the Bootstrap CSS framework. Our boilerplate uses Tailwind, and its design guide says not to add other UI libraries. So we should not be adding Bootstrap.

### What we are not doing

Keeping this tight so we can actually finish it. Not in scope: sign-up, password reset, "remember me", any new sign-in options, editing profiles from the page, or storing member details in the database.

Dark mode is also out of scope. The boilerplate supports it, but we are not designing for it. We just use the colours that are already in the design guide so we do not break anything that already works.

## The team page

### What goes on the page

The page shows the team name, the project name, and one card for each member. Each card has a photo, a name, a role and a short blurb.

### The fields

| **Field**    | **Rules**                                                                                                                    | **What if it is missing**                                                            |
| --- | --- | --- |
| Team name    | Between 2 and 40 characters. Shown once, as the main heading.                                                                | Page should not build without it.                                                    |
| Project name | Between 2 and 60 characters. Sits just under the team name.                                                                  | Page should not build without it.                                                    |
| Member name  | Between 2 and 50 characters. Always shown in full, never cut off.                                                            | Card should not build without it.                                                    |
| Photo        | Square, at least 200 by 200 pixels, jpg / png / webp, under 500 KB. Same size and shape on every card.                       | Show the initials placeholder instead. Never a broken image and never a blank space. |
| Role         | One of: PM, BA, UX, Dev 1, Dev 2. If someone has two roles, join them with a slash. Sits directly under the name.            | Card should not build without it.                                                    |
| Blurb        | Aim for 80 to 200 characters, 400 is the hard limit. Sits under the role. Anything over 200 gets cut off with a "Read more". | Card should not build without it.                                                    |
| Card order   | PM first, then BA, then UX, then Dev 1.                                                                                      | Fall back to alphabetical by surname.                                                |

The role list is fixed on purpose. If people can write their own, we end up with "BA" sitting next to something like "Full Stack Ninja", which looks messy and makes the page harder to read. Fixing the order matters too, otherwise whoever builds it just picks one and there is nothing for Dan to check against when he tests.

### How the cards sit on the page

Up to Dan. How many cards go across, how they stack on smaller screens, and how the card itself is put together are all design decisions and I am not going to specify them here.

The only things I need either way: it works on a phone, a tablet and a desktop, cards sitting in the same row are the same height even if one blurb is longer than the rest, and every photo is the same size as every other one, placeholders included.

### Writing the blurbs

Everyone uses the same shape so the four cards match: what you do on this project, and one thing about you.

For example:

> *Wallace is the BA on Team 80, working out what the client actually needs and writing it down so we can test it. Interested in how AI tools fit into requirements work.*

Write it in third person — "Wallace is...", not "I am Wallace..." — and everyone the same way, otherwise the cards look inconsistent. Keep it professional and aim for one or two sentences under 200 characters. Leave out student numbers, emails, phone numbers and addresses, since the site is public.

### Who is on the page

Four of us covering five roles, so Dan is doing both UX and Dev 2. That is allowed — Kuli is not a developer, and Lachlan and Dan are different people, so nobody ends up testing their own code.

| **Order** | **Name**         | **Role**   | **Has a photo?** | **Long blurb?** |
| --- | --- | --- | --- | --- |
| 1         | Kuli Ekanayake   | PM         |                  |                 |
| 2         | Wallace Tjang    | BA         |                  |                 |
| 3         | Dan Pham         | UX / Dev 2 |                  |                 |
| 4         | Lachlan Dumicich | Dev 1      |                  |                 |

The last two columns still need filling in. They matter because they tell Dan whether the placeholder and the long blurb are real cases he has to design for, or just something we are covering in theory.

### A note on photos

The repo is public and the site will be live, so everyone needs to actually agree before their photo goes in. Anyone who would rather not use a real photo can use an avatar, a drawing, or just the initials placeholder — that is a proper option, not a fallback, and the design should not make those cards look worse than the rest.

Worth knowing: once a photo is committed it stays in the Git history, so getting agreement afterwards is too late.

### The placeholder for missing photos

- Shows the person's initials in capitals, first name and surname — so "WT" for me.
- Solid background colour, with the initials readable against it (4.5:1 contrast or better).
- Exactly the same size and shape as a real photo, so cards do not jump around.

### Blurbs that run long

- Under 200 characters, just show the whole thing.
- Over 200 characters, cut it off visually and add a "Read more" that opens it up in place. Not a popup, not a link somewhere else.
- It has to be a real button so it works with the keyboard, and the label should switch to "Show less" once it is open.
- Opening one card should not push the others out of line.
- The full text should still be in the page even when it looks cut off, so screen readers and Ctrl+F can still find it. Hide it with styling, do not chop the text.

*That is my suggestion rather than a hard rule. If Dan wants to handle it differently, say so in the design handoff and I will either agree or push back when I check it.*

## The login page — styling only

**This is the important one. We are restyling the login page and nothing else. No changes to how logging in actually works.**

### What we are not touching

- How the username and password get checked.
- Sessions — how they are created, stored, expire, or get cleared.
- The list of valid accounts and where they live.
- The auth provider and the hook that reads it.
- The server-side check that protects logged-in pages.
- Form field names, where the form submits to, and the request method.
- The validation rules and the error messages they produce.
- The sign-in options that already exist — both stay, and both keep working.
- Env variables, config files and database rules.

### What we can change

- Styling and colours.
- Layout wrappers — containers, sections, headings that do not do anything functional.
- Labels and accessibility attributes on the fields that are already there.
- Text and images, like putting our team branding above the form.
- How error messages look. Not when they appear or what they say.

### How we check it

When Dan tests, the diff against main should show nothing changed in any of the files listed above. That is a straight pass or fail, not a judgement call. On top of that: a correct password still logs you in, a wrong one gives the same error message as before, and both sign-in options still work.

### States the design needs to cover

If any of these are missing when the design comes to me, it goes back:

- Empty form, nothing typed in.
- A field with the cursor in it.
- A validation error under a field.
- A failed login — wrong password.
- Mid-submit, with the button disabled.
- Mobile.

### One thing Kuli needs to decide

Right now logging in takes you to the dashboard. We need it to go to the team page instead. The simplest fix is changing where it redirects to, which is just a route, not auth logic. The other option is putting the team page content where the dashboard already is and changing no routing at all.

Either works, but Lachlan cannot start that bit until we pick one.

## Edge cases

Things that will come up and what should happen, so nobody has to guess while building.

| **What happens**                                                    | **What it should do**                                                                                 |
| --- | --- |
| Someone has no photo                                                | Show the initials placeholder, same size as a real photo. Nothing shifts.                             |
| A photo file is missing or the path is wrong                        | Fall back to the placeholder rather than showing a broken image. We check every path before sign-off. |
| A photo is not square                                               | Crop it from the centre. Do not stretch it.                                                           |
| A blurb is over 200 characters                                      | Cut it off visually with a working "Read more".                                                       |
| A blurb is over 400 characters                                      | Send it back and get it shortened. We do not handle this at display time.                             |
| A blurb has a long unbroken word or a URL in it                     | It wraps or breaks inside the card. It must not spill out.                                            |
| Someone has a really long name                                      | It wraps onto a second line. The card gets taller, the row stays even.                                |
| Someone has two roles                                               | Both in one badge with a slash between them, not split across lines.                                  |
| We end up with more or fewer than four members                      | The grid still works at every screen size, without one card stranded on its own row.                  |
| A name has accents or non-English characters                        | Displays properly.                                                                                    |
| Someone opens the team page without logging in                      | Sends them to the login page.                                                                         |
| A session expires while the team page is open and it gets refreshed | Sends them back to login. This already works, so we just need to not break it.                        |
| Login submitted with both fields empty                              | Same as it does now, just styled differently.                                                         |
| Someone views it on a 320px wide screen                             | No sideways scrolling and nothing overlapping, on either page.                                        |
| Photos have not loaded yet on a slow connection                     | Space is already reserved, so nothing jumps around as they come in.                                   |

## How we know it is done

All of these need to be true, and each one is something Dan can check without taking anyone's word for it.

### Login page

- Looks right at 320px, 768px and 1440px wide.
- The diff shows nothing changed in the auth files listed earlier.
- A correct password still logs you in.
- A wrong one gives the same error as before, just styled.
- Both sign-in options still work.
- Every field has a label you can see. Placeholder text does not count as a label.
- Tab moves through the fields in the order they appear, and you can see where you are.
- You can paste into the password field, so password managers still work.
- All six states from the design are actually built.

### Team page

- Team name and project name are there.
- One card per person, in the right order.
- Every card has a name, a role and a blurb.
- Someone with no photo gets the placeholder at the same size, and nothing shifts.
- A long blurb cuts off and the "Read more" opens it up properly.
- "Read more" works with the keyboard.
- The full blurb text is still findable with Ctrl+F when it is collapsed.
- Cards in the same row are the same height.
- Every photo has the person's name as its alt text.
- All the blurbs are third person and none is over 400 characters.

### Both pages

- Logging in lands you on the team page.
- Opening the team page without a session sends you to login.
- An accessibility checker finds no AA-level problems.
- Text is at least 4.5:1 contrast and buttons are at least 24 by 24 pixels.
- No sideways scrolling at any screen size.
- Both pages use the same colours and fonts.
- No .env file or passwords anywhere in the commits.
- All of the above checked on the deployed site, not just on someone's laptop.

## Still to sort out

| **What**                                                                                                  | **Who**     | **Holding up**   |
| --- | --- | --- |
| Where login redirects to after it works                                                                   | Kuli        | Lachlan          |
| Whether the team page sits inside the app shell or on its own — on its own is a bigger job than it sounds | Dan         | The design       |
| Filling in who has a photo and whose blurb runs long                                                      | Me          | Dan              |
| Picking the colours and sending them back to me for this doc                                              | Dan         | Lachlan          |
| Getting everyone to agree to their photo before we commit anything                                        | Me and Kuli | The first commit |
| Checking all four of us can push to the repo                                                              | Kuli        | Everyone         |
