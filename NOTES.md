# What shadcn/ui handled that I missed

The hand-built widgets in `src/playground/` cover the required keyboard paths,
but the generated shadcn components are more reusable because they compose
Radix UI primitives instead of embedding one fixed example.

- **Dialog composition and lifecycle:** My dialog has one built-in trigger,
  content, and close flow. The generated
  [Dialog](./src/components/ui/dialog.tsx) exposes separate Root, Trigger,
  Portal, Overlay, Content, Close, Title, and Description pieces, forwards
  Radix props, and supports both controlled and uncontrolled state. It also
  provides a portal-based overlay and optional close button. My native
  `<dialog>` gets modal focus containment and focus restoration from the
  browser, but does not offer those composition and configuration options.
- **Tab variations:** My
  [Tabs](./src/playground/Tabs.tsx) is fixed to horizontal, automatic
  activation and three hard-coded tabs. The generated
  [shadcn Tabs](./src/components/ui/tabs.tsx) delegates navigation to Radix
  and forwards its tab props, so consumers can configure orientation and
  activation mode; it also supports Radix features such as disabled tabs.
  My example does not implement vertical arrow-key navigation, manual
  activation, or disabled-tab handling.

The main lesson: shadcn's source is mostly a readable styling and composition
layer; Radix supplies much of the interaction and focus behavior underneath.

## Keyboard-only checks

- Opened the modal with Tab and Enter, checked that Tab and Shift+Tab cycle
  inside it, then closed it with Escape and confirmed focus returned to its
  trigger.
- Used Right Arrow to move between tabs and wrap to the first tab, then used
  Tab to leave the tablist.
- Focused the disclosure button and used Space to expand its content.
