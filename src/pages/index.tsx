import { HomeContainer } from '@/components/container/home'
import { TPost } from '@/types/PostData'
import axios from 'axios'
import { GetStaticProps } from 'next'
import React from 'react'

export default function HomePage({ data }: { data: TPost[] }) {
  return <HomeContainer data={data} />
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('https://asia-northeast1-order-maker.cloudfunctions.net/getAllPosts')
  const data: TPost[] = await response.data
  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
