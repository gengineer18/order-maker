import { TPost } from '@/types/PostData'
import { css } from '@emotion/core'
import { Card, Typography } from 'antd'
import NextLink from 'next/link'
import React from 'react'

const { Title, Text } = Typography

export const NewOrder = ({ data }: { data: TPost[] }) => {
  return (
    <section>
      <Title className="text-center" level={3} css={css({ marginTop: `1rem` })}>
        新着打線
      </Title>
      {data?.length > 0 &&
        data.map((data) => {
          return (
            <React.Fragment key={data.postId}>
              <NextLink href="/post/[id]" as={`/post/${data.postId}`} key={data.postId}>
                <a>
                  <Card css={css({ marginTop: `1rem`, border: `1px solid #718096` })}>
                    <Text>{data.title}で打線組んだｗｗ</Text>
                  </Card>
                </a>
              </NextLink>
            </React.Fragment>
          )
        })}
    </section>
  )
}
