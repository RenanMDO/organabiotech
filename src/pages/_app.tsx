import { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import GlobalStyle from '../Styles/global'
import theme from '../Styles/theme'


export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Component {...pageProps} />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
