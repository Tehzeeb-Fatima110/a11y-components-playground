# Accessibility Playground

A React and TypeScript playground for three keyboard-accessible patterns:
modal dialog, tabs, and disclosure. The hand-built examples live in
`src/playground/`; generated shadcn/ui Dialog and Tabs source lives in
`src/components/ui/`. See [NOTES.md](./NOTES.md) for a comparison.

## Run locally

```sh
npm install
npm run dev
```

Use Tab to move through controls, Enter or Space to activate them, Escape to
close the dialog, and the arrow keys to navigate tabs. The dialog also supports
Shift+Tab and returns focus to its trigger when closed.

## Verify

```sh
npm run lint
npm run build
```
