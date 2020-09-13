import { ButtonHome } from '@/components/atoms/buttons/ButtonHome'
import { ButtonTwitter } from '@/components/atoms/buttons/ButtonTwitter'
import { ViewPostData } from '@/components/presentational/post/ViewPostData'
import { TPostData } from '@/types/PostData'
import { css } from '@emotion/core'
import { useRouter } from 'next/router'
import React from 'react'

export const PostContainer = ({ data }: { data: TPostData[] }) => {
  const router = useRouter()
  const onClickBackHome = () => {
    router.push('/')
  }
  const onClickTwitter = () => {
    const postId = data ? data[0].postId : ''
    const title = data ? data[0].title : ''

    const url = `https://order-maker.woodsatweb.com/post/${postId}`
    const text = encodeURIComponent(`${title} で打線組んだｗｗ`)
    const hashtag = encodeURIComponent('打線組んだメーカー')
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&hashtags=${hashtag}`
    window.open(twitterUrl)
  }
  return (
    <div>
      <ViewPostData data={data} />
      <div className="text-center" css={css({ marginTop: `1rem` })}>
        <div className="mt-4">
          <ButtonTwitter onClick={onClickTwitter} />
        </div>
        <div className="mt-4">
          <ButtonHome onClick={onClickBackHome} />
        </div>
      </div>
    </div>
  )
}
