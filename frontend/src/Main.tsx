import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.tsx';
import { Provider } from 'react-redux';
import { store } from './services/store.ts';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme.ts';

import './css/global.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
