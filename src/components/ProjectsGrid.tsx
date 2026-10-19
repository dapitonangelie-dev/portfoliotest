import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle, ClipboardText, ChatCircleDots, AirplaneTilt, CalendarBlank } from '@/components/slab'

const SAMPLES = [
  {
    number: '01',
    category: 'CUSTOMER SUPPORT · PRACTICE SAMPLE',
    title: 'A clear, empathetic reply guide',
    description: 'A self-created example of structuring a support response: acknowledge the concern, clarify what can be checked, explain the next step, and set expectations.',
    sampleTitle: 'Example response framework',
    lines: ['Acknowledge the customer’s concern', 'Confirm the information available', 'Explain the next step in plain language', 'Escalate when specialist review is needed'],
    Icon: ChatCircleDots,
  },
  {
    number: '02',
    category: 'ADMIN SUPPORT · PRACTICE SAMPLE',
    title: 'A simple weekly task tracker',
    description: 'A sample layout for keeping responsibilities visible without overcomplicating the workflow. The entries below are fictional practice data.',
    sampleTitle: 'Weekly task overview · example data',
    lines: ['Update contact spreadsheet · In progress', 'Prepare weekly content list · To do', 'Review open requests · Follow-up', 'Organize shared documents · Complete'],
    Icon: ClipboardText,
  },
  {
    number: '03',
    category: 'TRAVEL SUPPORT · PRACTICE SAMPLE',
    title: 'An itinerary-change checklist',
    description: 'A practice checklist inspired by travel support workflows. It is an organizational aid, not live booking advice or a real customer itinerary.',
    sampleTitle: 'Before confirming a change',
    lines: ['Check the requested dates and route', 'Review available options in the approved system', 'Explain fare or policy limits accurately', 'Summarize the agreed itinerary and next step'],
    Icon: AirplaneTilt,
  },
  {
    number: '04',
    category: 'CONTENT SUPPORT · PRACTICE SAMPLE',
    title: 'A small weekly content plan',
    description: 'A lightweight planning format for keeping simple social content organized. Final graphics and video examples can be added as they are prepared.',
    sampleTitle: 'Sample content sequence',
    lines: ['Monday · Helpful tip', 'Wednesday · Product or service feature', 'Friday · Short behind-the-scenes reel', 'Weekend · Community question'],
    Icon: CalendarBlank,
  },
]

export default function ProjectsGrid() {
  return (
    <section className="va-page" aria-labelledby="samples-title">
      <header className="va-page__head">
        <span className="va-eyebrow">Work samples</span>
        <h1 id="samples-title">A look at how I approach the work.</h1>
        <p>These are self-created practice examples, not paid client projects. They show how I think through organization, communication, and follow-through. I will add finished Canva and video samples as they are ready.</p>
      </header>
      <div className="va-samples">
        {SAMPLES.map(({ Icon, ...sample }) => (
          <article className="va-sample" key={sample.number}>
            <div className="va-sample__top">
              <span className="va-sample__icon"><Icon size={23} weight="regular" aria-hidden="true" /></span>
              <span className="va-sample__number">{sample.number}</span>
            </div>
            <span className="va-sample__category">{sample.category}</span>
            <h2>{sample.title}</h2>
            <p>{sample.description}</p>
            <div className="va-sample__preview">
              <h3>{sample.sampleTitle}</h3>
              <ul>
                {sample.lines.map((line) => (
                  <li key={line}><CheckCircle size={15} aria-hidden="true" /><span>{line}</span></li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="va-endnote">
        <p>Want a sample tailored to a specific task? We can discuss the brief and agree on what would be useful to demonstrate.</p>
        <Link to="/contact" className="va-button">Get in touch <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
