import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/slab'

const LINKS = [
  { number: '01', title: 'Work samples', description: 'Self-created examples of how I organize information and support everyday tasks.', to: '/projects', note: 'PRACTICE PROJECTS' },
  { number: '02', title: 'Services', description: 'Customer support, administrative assistance, and creative content support.', to: '/services', note: 'HOW I CAN HELP' },
  { number: '03', title: 'About me', description: 'My background across customer service, travel support, and digital marketing.', to: '/about', note: 'MY BACKGROUND' },
  { number: '04', title: 'My journey', description: 'The experience and tools shaping my move into virtual assistance.', to: '/showcase', note: 'EXPERIENCE & LEARNING' },
  { number: '05', title: 'My approach', description: 'Clear communication, careful follow-through, and a willingness to learn.', to: '/testimonials', note: 'WHAT TO EXPECT' },
] as const

export default function HomeBento() {
  return (
    <nav className="editorial-index" aria-label="Explore Mirelle's portfolio">
      {LINKS.map((item) => (
        <Link className="editorial-index__link" to={item.to} key={item.to}>
          <span className="editorial-index__number">{item.number}</span>
          <span className="editorial-index__copy">
            <span className="editorial-index__note">{item.note}</span>
            <span className="editorial-index__title">{item.title}</span>
            <span className="editorial-index__description">{item.description}</span>
          </span>
          <ArrowUpRight className="editorial-index__arrow" size={20} weight="bold" aria-hidden="true" />
        </Link>
      ))}
    </nav>
  )
}
