import { HomeContainer } from '@/components/container/home'
import axios from 'axios'

export default function HomePage({ data }) {
  return (
    <>
      <p>{data.firstName}</p>
      <HomeContainer />
    </>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://asia-northeast1-order-maker.cloudfunctions.net/mysqlDemo')
  const data = await response.data[0]
  return {
    props: {
      data,
    },
  }
}
