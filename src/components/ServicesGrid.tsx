import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/slab'

const SERVICES = [
  {
    number: '01',
    title: 'Customer support assistance',
    summary: 'Friendly, clear support that helps customers understand the next step.',
    examples: ['Responding to general inquiries', 'Organizing customer information', 'Following approved processes and escalating when needed'],
  },
  {
    number: '02',
    title: 'Administrative support',
    summary: 'Practical help keeping information, records, and everyday tasks organized.',
    examples: ['Spreadsheet updates and basic tracking', 'Data organization and recordkeeping', 'Document and checklist preparation'],
  },
  {
    number: '03',
    title: 'Social media & creative support',
    summary: 'Simple, consistent visual content for brands and small businesses.',
    examples: ['Canva graphics and promotional materials', 'Captions and basic social media content', 'Short-form edits using CapCut or Filmora'],
  },
  {
    number: '04',
    title: 'Travel support',
    summary: 'Experience-informed assistance for travel-related requests and itinerary changes.',
    examples: ['Booking and itinerary support', 'Flight change and disruption requests', 'Familiarity with Amadeus GDS workflows'],
  },
]

export default function ServicesGrid() {
  return (
    <section className="va-page" aria-labelledby="services-title">
      <header className="va-page__head">
        <span className="va-eyebrow">Services</span>
        <h1 id="services-title">Practical support, with care in the details.</h1>
        <p>I am building my General Virtual Assistant services around the work I know, the tools I use, and the skills I am continuing to develop.</p>
      </header>
      <div className="va-service-list">
        {SERVICES.map((service) => (
          <article className="va-service" key={service.number}>
            <span className="va-service__number">{service.number}</span>
            <div className="va-service__content">
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <ul>{service.examples.map((example) => <li key={example}>{example}</li>)}</ul>
            </div>
            <span className="va-service__label">SUPPORT AREA</span>
          </article>
        ))}
      </div>
      <div className="va-endnote">
        <p>Every project starts with a conversation about your needs, preferred process, timeline, and scope. I will be transparent when a task falls outside my current experience.</p>
        <Link to="/contact" className="va-button">Discuss a task <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
