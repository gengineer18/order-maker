import './style.css'
import 'antd/dist/antd.css'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { css } from '@emotion/core'
import { Layout } from 'antd'
import { ThemeProvider } from 'emotion-theming'

const { Content } = Layout

const theme = {
  colors: {
    primary: `red`,
    secondary: `blue`,
  },
}

const layout = css({
  maxWidth: '960px',
  margin: `0 auto`,
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content css={layout}>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
