import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/slab'

const SKILLS = [
  { label: 'Customer communication', detail: 'Listening closely, writing clear non-voice responses, and explaining the next step.' },
  { label: 'Process & organization', detail: 'Following documented steps, tracking details, and helping teammates navigate processes.' },
  { label: 'Creative assistance', detail: 'Making practical Canva graphics and editing short-form videos with accessible tools.' },
  { label: 'Continuous learning', detail: 'Building confidence with web design, Figma, GitHub, and landing-page fundamentals.' },
]

export default function ShowcaseGrid() {
  return (
    <section className="va-page" aria-labelledby="journey-title">
      <header className="va-page__head">
        <span className="va-eyebrow">My journey</span>
        <h1 id="journey-title">Experience is my starting point. Learning is part of the plan.</h1>
        <p>I’m growing from customer service into broader virtual assistance by combining the work I already know with practical, self-directed learning.</p>
      </header>
      <div className="va-journey-note">
        <span className="va-journey-note__mark">M</span>
        <div>
          <span className="va-eyebrow">The direction</span>
          <h2>Reliable support, thoughtful details, and creative help when it’s needed.</h2>
          <p>I am currently learning website design and development, landing-page structure, and funnel basics. These are learning goals—not services I’m claiming as advanced expertise.</p>
        </div>
      </div>
      <div className="va-skill-list">
        {SKILLS.map((skill, index) => (
          <article className="va-skill" key={skill.label}>
            <span className="va-skill__num">0{index + 1}</span>
            <div><h2>{skill.label}</h2><p>{skill.detail}</p></div>
          </article>
        ))}
      </div>
      <div className="va-endnote">
        <p>As I practise, I’ll add more finished samples, document the process, and clearly separate learning projects from client work.</p>
        <Link to="/projects" className="va-button">View practice samples <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
