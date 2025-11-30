import { Breadcrumb } from 'app/components/breadcrumb'

export const metadata = {
  title: 'Team',
  description: 'Meet our team.',
}

type TeamMember = {
  name: string
  position: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Oleksandr (Alex) Nemish',
    position: 'Founder, CTO',
  },
  {
    name: 'Oleksii Khodakivskyi',
    position: 'Co-founder',
  },
  {
    name: 'Ruslan Shevchenko',
    position: 'Ph.D., Software Architect',
  },
  {
    name: 'Roman Hulenko',
    position: 'Senior Software Engineer',
  },
  {
    name: 'Serhii Lekariev',
    position: 'Senior Software Engineer',
  },
  {
    name: 'Sergii Shcherbyna',
    position: 'Senior Software Engineer',
  },
]

export default function Page() {
  return (
    <section>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Team' }
      ]} />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Our Team</h1>
      <div className="flex flex-col space-y-4 mb-4">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <h2 className="text-l font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              {member.name}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-500">
              {member.position}
            </p>
            {/* <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {member.bio}
            </p> */}
          </div>
        ))}
      </div>
    </section>
  )
}
