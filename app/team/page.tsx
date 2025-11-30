import { Breadcrumb } from 'app/components/breadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: 'Team',
  description: 'Meet our world-class blockchain engineering team. Expert developers and architects specializing in Cardano smart contracts, Bitcoin infrastructure, ZK cryptography, and L2 scaling solutions.',
  openGraph: {
    title: 'Lantr Engineering Team',
    description: 'World-class team of blockchain developers, Ph.D. software architects, and senior engineers with deep expertise in Cardano, Bitcoin, and cutting-edge decentralized technologies.',
    url: `${baseUrl}/team`,
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Our Team')}`,
        width: 1200,
        height: 630,
        alt: 'Lantr Engineering Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lantr Engineering Team',
    description: 'World-class blockchain developers and architects with expertise in Cardano, Bitcoin, ZK cryptography, and L2 scaling.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Our Team')}`],
  },
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
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center gap-3">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center overflow-hidden border-2 border-orange-500">
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover grayscale"
                />
              ) : (
                <span className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
                  {getInitials(member.name)}
                </span>
              )}
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-400 tracking-tight">
                {member.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-center">
        <h2 className="text-2xl font-semibold mb-4 tracking-tight">Join Us</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. If you're passionate about building innovative solutions, we'd love to hear from you.
        </p>
        <Link
          href="mailto:contact@lantr.io"
          className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
