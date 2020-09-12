import { HomeContainer } from '@/components/container/home'
import { TPost } from '@/types/PostData'
import axios from 'axios'
import { GetStaticProps } from 'next'
import React from 'react'

export default function HomePage({ data }: { data: TPost[] }) {
  return (
    <>
      {data.map((data) => (
        <React.Fragment key={data.postId}>
          <p>{data.postId}</p>
          <p>{data.title}</p>
          <p>{data.userName}</p>
        </React.Fragment>
      ))}
      <HomeContainer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('https://asia-northeast1-order-maker.cloudfunctions.net/getAllPost')
  const data: TPost[] = await response.data
  return {
    props: {
      data,
    },
  }
}
