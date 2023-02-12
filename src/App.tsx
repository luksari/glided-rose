import { ThemeProvider } from 'styled-components';

import { Router } from './router/Router';
import { theme } from './theme/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};
