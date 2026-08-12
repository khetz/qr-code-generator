# 🔳 KhetzQR — Angular Client

A QR code generator app built with **Angular**, featuring AI-powered QR code generation via Claude and a polished UI with dark mode support.

## Tech Stack

- **Angular** with standalone components
- **Signals** for reactive state management
- **CSS custom properties** for theming
- **Dark mode** with localStorage persistence

## Project Structure

```
src/
├── app/
│   ├── core/           
│       ├── services
│   ├── features/       
│   │   ├── history/
│   │   └── qr-generation/
│   ├── layout/
|   │   ├── footer/
│   |   ├── header/
│   │   └── home/
│   └── shared/
│   |   ├── components
│   |   ├── directives
│   |   ├── dropdowns
│   |   ├── models
│   |   ├── toast
│   |   ├── utils
│
├── assets/
└── styles.css
```

**Dependency rule:** one-way flow — `features/` → `core/` → `shared/`. Layouts compose features but never import from them directly.

**Naming convention:** `[name].[type].ts` (e.g. `qr-preview.component.ts`, `theme.service.ts`)

## Features

**QR Code Generator** — Configure and preview QR codes in real time with customisable styling options.

**AI Generation** — Describe what you want in a sentence, and Claude generates the QR configuration JSON. The AI generation component emits the config to the QR preview component, which renders it instantly.

**Dark Mode** — A `ThemeService` toggles `.dark-theme` on `document.body` using Angular signals, with the preference persisted in localStorage.

## Getting Started

### Prerequisites

- Node.js 20+
- Angular CLI

### Install & Run

```bash
npm install
ng serve
```

The app runs at `http://localhost:4200` by default.

### Environment Config

Set your API base URL in `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7260/api/'
};
```

## Related

- **Backend** — .NET API handling AI generation ([backend repo](https://github.com/khetz/khetzqr-api))

## License

MIT