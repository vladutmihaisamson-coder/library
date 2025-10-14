# Token-Driven Design System

## Packages
- tokens: Style Dictionary-built tokens.
- react-app: Example React app using tokens.

## Development
- Build tokens: 
  - cd packages/tokens && npm run build
- Dev app:
  - cd apps/react-app && npm run dev

## Usage in React
- Import base styles in entry: 
  import '@library/tokens/css'

- Use CSS variables: 
  color: var(--lib-color-brand-primary);
  padding: var(--lib-size-spacing-4);

## Distribution
- Publish tokens package to npm or private registry.
- Exports: 
  - JS: import tokens from '@library/tokens'
  - CSS: import '@library/tokens/css'
  - SCSS: @use '@library/tokens/scss';
  - JSON: '@library/tokens/json'

## Versioning
- Use semver.
- Ship changes via CI with release tags.
