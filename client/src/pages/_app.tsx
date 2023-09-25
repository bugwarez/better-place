import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//!React toasify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

//!Themes
import { lightTheme } from "@/themes/light-theme"
//!Components
import Layout from '../components/Layout';
import MenuDrawer from '../components/MenuDrawer';
import { useRouter } from 'next/router';



export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <MenuDrawer>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MenuDrawer>
        <ToastContainer position="top-right" autoClose={5000} newestOnTop closeOnClick pauseOnHover />
      </ThemeProvider>
    </>
  )
}
