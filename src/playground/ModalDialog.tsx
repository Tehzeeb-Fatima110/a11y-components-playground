import { useEffect, useId, useRef, useState } from 'react'

export function ModalDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) {
      dialog.showModal()
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  function closeDialog() {
    setIsOpen(false)
  }

  return (
    <>
      <button
        ref={triggerRef}
        className="button button-primary"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        Open dialog
        <span aria-hidden="true">↗</span>
      </button>
      <dialog
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        aria-modal="true"
        className="modal"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault()
            closeDialog()
          }
        }}
        onClose={() => {
          setIsOpen(false)
          triggerRef.current?.focus()
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog()
        }}
        ref={dialogRef}
        role="dialog"
      >
        <div className="modal-header">
          <div className="modal-icon" aria-hidden="true">✦</div>
          <button
            aria-label="Close dialog"
            className="icon-button"
            onClick={closeDialog}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <h3 id={titleId}>A small moment to focus</h3>
        <p id={descriptionId}>
          This native modal keeps keyboard focus inside until you close it.
          Try Tab, Shift + Tab, or Escape.
        </p>
        <label className="field-label" htmlFor="dialog-name">Your name</label>
        <input
          className="text-input"
          id="dialog-name"
          placeholder="Ada Lovelace"
          type="text"
        />
        <div className="modal-actions">
          <button className="button button-quiet" onClick={closeDialog} type="button">
            Cancel
          </button>
          <button className="button button-primary" onClick={closeDialog} type="button">
            Done
            <span aria-hidden="true">✓</span>
          </button>
        </div>
      </dialog>
    </>
  )
}
