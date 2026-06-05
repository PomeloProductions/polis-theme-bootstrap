import { createTheme } from '@mantine/core';
import type { PolisTheme } from '@polis/react/theme/PolisTheme';

/**
 * Mantine theme overrides for the Video Game Rankings application.
 *
 * Extracted verbatim from `apps/web/src/App.tsx` of the VGR repo. This is
 * the same `mantineTheme` object that was passed to `<MantineProvider>`.
 *
 * Exported standalone for callers that consume the Mantine theme directly,
 * and re-exported below at `theme.mantineTheme` so `<PolisProvider>` can
 * forward it into Mantine.
 */
export const mantineTheme = createTheme({
    primaryColor: 'blue',
    fontFamily: 'Inter, sans-serif',
    other: {
        primaryShade: { light: 6, dark: 8 },
    },
    components: {
        Table: {
            styles: {
                th: {
                    backgroundColor: '#f8f9fa',
                    borderBottom: '2px solid #dee2e6',
                    padding: '1rem',
                },
                td: {
                    padding: '1rem',
                },
                tr: {
                    '&:hover': {
                        backgroundColor: '#f8f9fa',
                    },
                },
            },
        },
    },
});

/**
 * `@polis/theme-bootstrap` — the Polis token bundle that drives the
 * VGR-flavored visual identity (Bootstrap-rooted SCSS palette + Mantine
 * theme override).
 *
 * Pass this to `<PolisProvider theme={theme}>` from `@polis/react`.
 *
 * The primary palette tracks the Mantine theme's `primaryColor: 'blue'`,
 * which is what the actual Mantine surface renders in the VGR app. The
 * other colour tokens align with Bootstrap 5 defaults.
 */
export const theme: PolisTheme = {
    name: 'bootstrap',

    colors: {
        primary: '#228be6',
        primaryHover: '#1c7ed6',
        primaryActive: '#1971c2',
        surface: '#ffffff',
        surfaceAlt: '#f8f9fa',
        textPrimary: '#212529',
        textMuted: '#6c757d',
        border: '#dee2e6',
        success: '#52ab58',
        warning: '#ffc409',
        danger: '#eb445a',
        info: '#3298b3',
    },

    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif',
        mono: '"SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },

    radius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        full: '9999px',
    },

    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },

    mantineTheme,
};

export default theme;
