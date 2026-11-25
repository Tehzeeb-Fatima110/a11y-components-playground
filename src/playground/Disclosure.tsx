import { useId, useState } from 'react'

export function Disclosure() {
  const [isExpanded, setIsExpanded] = useState(false)
  const panelId = useId()

  return (
    <div className="disclosure">
      <button
        aria-controls={panelId}
        aria-expanded={isExpanded}
        className="disclosure-trigger"
        onClick={() => setIsExpanded((expanded) => !expanded)}
        type="button"
      >
        <span className="disclosure-symbol" aria-hidden="true">
          {isExpanded ? '−' : '+'}
        </span>
        <span>Why keyboard access matters</span>
        <span aria-hidden="true" className="disclosure-chevron">
          {isExpanded ? '↑' : '↓'}
        </span>
      </button>
      <div className="disclosure-panel" hidden={!isExpanded} id={panelId}>
        <p>
          A keyboard is not an edge case. Building with native buttons and
          predictable focus behavior makes an interface easier for everyone
          to use, including people who cannot use a mouse.
        </p>
      </div>
    </div>
  )
}
