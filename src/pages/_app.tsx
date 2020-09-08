import './style.css'
import 'antd/dist/antd.css'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { Layout } from 'antd'
import { ThemeProvider } from 'emotion-theming'

const { Content } = Layout

const theme = {
  colors: {
    primary: `red`,
    secondary: `blue`,
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
