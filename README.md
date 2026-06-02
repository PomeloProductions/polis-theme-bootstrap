# @polis/theme-vgr

Video Game Rankings theme for Polis-family apps. Provides the SCSS design
tokens (variables, fonts, base element styles, responsive helpers) and the
Mantine theme overrides extracted from the VGR web app.

## What's in here

```
src/
  theme.ts                   Mantine theme override (createTheme(...))
  styles/
    main.scss                Imports bootstrap + the partials below
    variables.scss           CSS custom properties (colors, typography, layout)
    fonts.scss               Font-face declarations (currently empty placeholder)
    elements.scss            Base element styles (h3/h4/h6, .button, .alert, ...)
    responsive.scss          Breakpoint helpers (.hide-in-mobile, .desktop-only, ...)
```

The contents are extracted verbatim from
`Video-Game-Rankings/apps/web/src/theme/` and the inline `mantimeTheme`
object that lived in `apps/web/src/App.tsx`.

## Consuming

This package follows the same distribution pattern as `polis-laravel` and
`polis-react`: it lives in a public GitHub repo and is pulled in via a
`github:` dependency pinned to a tag.

Add to the consuming app's `package.json`:

```json
{
  "dependencies": {
    "@polis/theme-vgr": "github:PomeloProductions/polis-theme-vgr#v0.1.0"
  }
}
```

Then `npm install`.

## Importing

### Mantine theme

```ts
import { MantineProvider } from '@mantine/core';
import { theme } from '@polis/theme-vgr';

export function App() {
  return (
    <MantineProvider theme={theme}>
      {/* ... */}
    </MantineProvider>
  );
}
```

### SCSS

Import the bundle entry point:

```scss
@import '@polis/theme-vgr/styles/main.scss';
```

Or pull in individual partials:

```scss
@import '@polis/theme-vgr/styles/variables';
@import '@polis/theme-vgr/styles/elements';
@import '@polis/theme-vgr/styles/responsive';
```

`main.scss` currently imports `~bootstrap/scss/bootstrap`, so the consuming
app must have `bootstrap` available to its SCSS resolver (most bundlers
honour the `~` tilde-prefix to mean "resolve from `node_modules`").

## Versioning

Tagged releases follow SemVer. Breaking changes bump the major; new
features the minor; bug fixes the patch. Pin consumers to a tag
(`#v0.1.0`) so theme updates roll out deliberately.
