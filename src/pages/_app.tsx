import './style.css'
import 'antd/dist/antd.css'
import { ThemeProvider } from 'emotion-theming'

const theme = {
  colors: {
    primary: `red`,
    secondary: `blue`,
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
