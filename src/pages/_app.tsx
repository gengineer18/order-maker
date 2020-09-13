import './style.css'
import 'antd/dist/antd.css'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { css } from '@emotion/core'
import { Layout } from 'antd'
import { ThemeProvider } from 'emotion-theming'
import Head from 'next/head'

const { Content } = Layout

const theme = {
  colors: {
    primary: `red`,
    secondary: `blue`,
  },
}

const wrapper = css({
  minHeight: `calc(100vh - 70px)`,
})

const layout = css({
  maxWidth: `960px`,
  margin: `0 auto`,
  padding: `20px 12px`,
})

const footer = css({
  height: `50px`,
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>打線組んだｗｗメーカー</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <div css={wrapper}>
          <Header />
          <Content css={layout}>
            <Component {...pageProps} />
          </Content>
        </div>
        <Footer css={footer} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
