import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme.js';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './../Component/Header/Navbar';
import { store } from '../Store/Store';
// import "../Messanger/styles.css"
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
