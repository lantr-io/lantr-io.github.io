import { Breadcrumb } from 'app/components/breadcrumb'

export const metadata = {
  title: 'Team',
  description: 'Meet our team.',
}

type TeamMember = {
  name: string
  position: string
  bio: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Oleksandr (Alex) Nemish',
    position: 'Founder, CTO',
    bio: 'A brief bio describing Alex\'s background, expertise, and role at the company.',
  },
  {
    name: 'Oleksii Khodakivskyi',
    position: 'Co-founder, Very nice guy',
    bio: 'A brief bio describing Oleksii\'s background, expertise, and role at the company.',
  },
  {
    name: 'Ruslan Shevchenko',
    position: 'Ph.D., Software Architect',
    bio: 'A brief bio describing Ruslan\'s background, expertise, and role at the company.',
  },
  {
    name: 'Roman Hulenko',
    position: 'Senior Software Engineer',
    bio: 'A brief bio describing Roman\'s background, expertise, and role at the company.',
  },
  {
    name: 'Serhii Lekariev',
    position: 'Senior Software Engineer',
    bio: 'A brief bio describing Serhii\'s background, expertise, and role at the company.',
  },
  {
    name: 'Sergii Shcherbyna',
    position: 'Senior Software Engineer',
    bio: 'A brief bio describing Sergii\'s background, expertise, and role at the company.',
  },
]

export default function Page() {
  return (
    <section>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Team' }
      ]} />
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">Our Team</h1>
      <div className="space-y-6">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight mb-1">
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
