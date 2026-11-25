import './App.css'
import { Disclosure } from './playground/Disclosure'
import { ModalDialog } from './playground/ModalDialog'
import { Tabs } from './playground/Tabs'

function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <a aria-label="A11y lab home" className="wordmark" href="#top">
          <span aria-hidden="true" className="wordmark-mark">a.</span>
          <span>small things, well made</span>
        </a>
        <span className="header-note"><span aria-hidden="true">●</span> An accessibility playground</span>
      </header>

      <section aria-labelledby="page-title" className="intro" id="top">
        <p className="eyebrow"><span aria-hidden="true">✳</span> LEARN BY BUILDING</p>
        <h1 id="page-title">Good interfaces<br />make room for everyone.</h1>
        <p className="intro-copy">
          Three familiar patterns, built from the ground up with keyboard
          interaction and clear semantics in mind.
        </p>
        <div aria-label="Keyboard interaction reminders" className="key-hints">
          <span><kbd>Tab</kbd> move</span>
          <span><kbd>Enter</kbd> activate</span>
          <span><kbd>Esc</kbd> dismiss</span>
          <span><kbd>←</kbd><kbd>→</kbd> navigate tabs</span>
        </div>
      </section>

      <div className="component-grid">
        <section aria-labelledby="dialog-heading" className="component-card dialog-card">
          <div className="card-topline">
            <span className="component-number">01</span>
            <span className="pattern-tag">DIALOG</span>
          </div>
          <h2 id="dialog-heading">A moment in focus</h2>
          <p className="card-description">
            A modal that keeps focus inside and returns it to its trigger.
          </p>
          <div className="card-demo dialog-demo">
            <ModalDialog />
            <span className="demo-caption"><span aria-hidden="true">↳</span> Open, then press Tab or Escape</span>
          </div>
        </section>

        <section aria-labelledby="tabs-heading" className="component-card tabs-card">
          <div className="card-topline">
            <span className="component-number">02</span>
            <span className="pattern-tag">TABS</span>
          </div>
          <h2 id="tabs-heading">A place for each thing</h2>
          <p className="card-description">
            Arrow keys move between tabs and activate each panel.
          </p>
          <div className="card-demo">
            <Tabs />
            <span className="demo-caption"><span aria-hidden="true">↳</span> Focus a tab, then press ← or →</span>
          </div>
        </section>

        <section aria-labelledby="disclosure-heading" className="component-card disclosure-card">
          <div className="card-topline">
            <span className="component-number">03</span>
            <span className="pattern-tag">DISCLOSURE</span>
          </div>
          <h2 id="disclosure-heading">More, when you need it</h2>
          <p className="card-description">
            A simple button reveals or hides additional information.
          </p>
          <div className="card-demo">
            <Disclosure />
            <span className="demo-caption"><span aria-hidden="true">↳</span> Press Enter or Space to toggle</span>
          </div>
        </section>
      </div>

      <footer className="page-footer">
        <span><span aria-hidden="true">✳</span> Built to be explored, one key at a time.</span>
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/" rel="noreferrer" target="_blank">
          WAI-ARIA APG <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  )
}

export default App
