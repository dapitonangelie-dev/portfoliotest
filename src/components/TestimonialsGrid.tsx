import { Link } from 'react-router-dom'
import { ArrowUpRight, ChatCircleDots, CheckCircle, BookOpenText } from '@/components/slab'

const APPROACH = [
  {
    number: '01',
    title: 'Communicate clearly',
    detail: 'I listen to the request, confirm what is needed, and explain the next step in straightforward language.',
    Icon: ChatCircleDots,
  },
  {
    number: '02',
    title: 'Follow the process carefully',
    detail: 'I pay attention to details, use available guidance, and involve the right person when something requires specialist review.',
    Icon: CheckCircle,
  },
  {
    number: '03',
    title: 'Keep learning',
    detail: 'I welcome feedback, practise unfamiliar tools, and treat new tasks as opportunities to improve without overstating what I already know.',
    Icon: BookOpenText,
  },
]

export default function TestimonialsGrid() {
  return (
    <section className="va-page" aria-labelledby="approach-title">
      <header className="va-page__head">
        <span className="va-eyebrow">My approach</span>
        <h1 id="approach-title">Good support starts with paying attention.</h1>
        <p>This page shares the working principles I bring to a team. I have not added fabricated client testimonials or results.</p>
      </header>
      <div className="va-approach-list">
        {APPROACH.map(({ Icon, ...item }) => (
          <article className="va-approach" key={item.number}>
            <span className="va-approach__number">{item.number}</span>
            <span className="va-approach__icon"><Icon size={25} weight="regular" aria-hidden="true" /></span>
            <div><h2>{item.title}</h2><p>{item.detail}</p></div>
          </article>
        ))}
      </div>
      <div className="va-endnote">
        <p>Every team has its own tools and expectations. I aim to learn the workflow, ask useful questions, and contribute steadily.</p>
        <Link to="/contact" className="va-button">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
