import { createTheme } from '@mantine/core';

/**
 * Mantine theme overrides for the Video Game Rankings application.
 *
 * Extracted verbatim from `apps/web/src/App.tsx` of the VGR repo. This is
 * the same `mantimeTheme` object that was passed to `<MantineProvider>`.
 */
export const theme = createTheme({
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

export default theme;
