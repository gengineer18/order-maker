import { PostContainer } from '@/components/container/post'
import { TPost, TPostData } from '@/types/PostData'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

export default function PostIdPage({ data }: { data: TPostData[] }) {
  return data && <PostContainer data={data} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get('https://asia-northeast1-order-maker.cloudfunctions.net/getAllPosts')
  const data: TPost[] = await response.data
  const paths = data.map((data) => `/post/${data.postId}`)
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id
  const response = await axios.get('https://asia-northeast1-order-maker.cloudfunctions.net/getAPost', {
    params: { postId: id },
  })
  const data: TPostData[] = await response.data
  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
