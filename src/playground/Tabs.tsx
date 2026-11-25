import { useId, useRef, useState, type KeyboardEvent } from 'react'

const tabContent = [
  {
    label: 'Overview',
    eyebrow: 'YOUR WORKSPACE',
    title: 'Everything, at a glance.',
    body: 'A quick snapshot of the details that matter most, all in one calm place.',
    icon: '◫',
  },
  {
    label: 'Activity',
    eyebrow: 'RECENT CHANGES',
    title: 'The latest, in order.',
    body: 'Follow updates as they happen and pick up right where you left off.',
    icon: '◷',
  },
  {
    label: 'Settings',
    eyebrow: 'MAKE IT YOURS',
    title: 'Set things your way.',
    body: 'Choose the preferences that make this space work better for you.',
    icon: '⚙',
  },
]

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const id = useId()

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, current: number) {
    let next: number | undefined

    switch (event.key) {
      case 'ArrowRight':
        next = (current + 1) % tabContent.length
        break
      case 'ArrowLeft':
        next = (current - 1 + tabContent.length) % tabContent.length
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = tabContent.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    setActiveTab(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="tabs-widget">
      <div aria-label="Workspace sections" className="tab-list" role="tablist">
        {tabContent.map((tab, index) => (
          <button
            aria-controls={`${id}-panel-${index}`}
            aria-selected={activeTab === index}
            className="tab-trigger"
            id={`${id}-tab-${index}`}
            key={tab.label}
            onClick={() => setActiveTab(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            ref={(element) => {
              tabRefs.current[index] = element
            }}
            role="tab"
            tabIndex={activeTab === index ? 0 : -1}
            type="button"
          >
            <span aria-hidden="true">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
      {tabContent.map((tab, index) => (
        <section
          aria-labelledby={`${id}-tab-${index}`}
          className="tab-panel"
          hidden={activeTab !== index}
          id={`${id}-panel-${index}`}
          key={tab.label}
          role="tabpanel"
          tabIndex={0}
        >
          <span className="panel-eyebrow">{tab.eyebrow}</span>
          <h3>{tab.title}</h3>
          <p>{tab.body}</p>
        </section>
      ))}
    </div>
  )
}
