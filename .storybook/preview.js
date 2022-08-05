import { ThemeProvider } from 'styled-components';
import {theme} from '../src'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme.theme}>
      {Story()}
    </ThemeProvider>
  ),
];