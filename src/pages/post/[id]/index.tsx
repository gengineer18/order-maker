import { TPost, TPostData } from '@/types/PostData'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

export default function PostIdPage({ data }: { data: TPostData[] }) {
  return (
    <div>
      {data?.length > 0 &&
        data.map((data) => {
          return (
            <React.Fragment key={data.order}>
              <p>{data.order}番</p>
              <p>{data.position}</p>
              <p>{data.description}</p>
            </React.Fragment>
          )
        })}
    </div>
  )
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
