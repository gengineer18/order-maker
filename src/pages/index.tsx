import { HomeContainer } from '@/components/container/home'
import axios from 'axios'

export default function HomePage({ res }) {
  return (
    <>
      <p>{res}</p>
      <HomeContainer />
    </>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://asia-northeast1-order-maker.cloudfunctions.net/api/hello')
  const data = await response.data
  const res = await data.res
  return {
    props: {
      res,
    },
  }
}
