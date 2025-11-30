import { Breadcrumb } from 'app/components/breadcrumb'
import Image from 'next/image'

export const metadata = {
  title: 'Team',
  description: 'Meet our team.',
}

type TeamMember = {
  name: string
  position: string
  photo: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Nemish',
    position: 'Founder, CTO',
    photo: '/photo/atlanter.jpg',
  },
  {
    name: 'Oleksii Khodakivskyi',
    position: 'Co-founder',
    photo: '/photo/ok.jpeg',
  },
  {
    name: 'Ruslan Shevchenko',
    position: 'Ph.D., Software Architect',
    photo: '/photo/rssh.jpeg',
  },
  {
    name: 'Roman Hulenko',
    position: 'Senior Software Engineer',
    photo: '/photo/rh.jpeg',
  },
  {
    name: 'Serhii Lekariev',
    position: 'Senior Software Engineer',
    photo: '/photo/sl.jpeg',
  },
  {
    name: 'Sergii Shcherbyna',
    position: 'Senior Software Engineer',
    photo: '/photo/ss.jpeg',
  },
]

function getInitials(name: string): string {
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return parts[0][0] + parts[parts.length - 1][0]
  }
  return name.substring(0, 2)
}

export default function Page() {
  return (
    <section>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Team' }
      ]} />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex items-center gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center overflow-hidden border-2 border-orange-500">
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
                  {getInitials(member.name)}
                </span>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-400 tracking-tight">
                {member.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
