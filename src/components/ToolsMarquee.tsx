import { useMemo } from 'react'

/** A text-only tools strip. Only tools Mirelle has mentioned are listed. */
export const tools = [
  'Microsoft 365',
  'Excel',
  'Google tools · beginner',
  'Canva',
  'CapCut',
  'Filmora',
  'Premiere Pro · beginner',
  'Amadeus GDS',
  'CRM & support tools',
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...tools, ...tools], [])
  return (
    <section className="tools-marquee tools-marquee--text" aria-label="Tools and platforms">
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => (
          <span key={`${tool}-${i}`} className="tools-marquee__item">
            <span className="tools-marquee__dot" />
            <span className="tools-marquee__label">{tool}</span>
          </span>
        ))}
      </div>
      <ul className="sr-only">
        {tools.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
    </section>
  )
}
