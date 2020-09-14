import { CollapseBeforeOrderMaking } from '@/components/presentational/home/CollapseBeforeOrderMaking'
import { CollapseWhatIsOrderMaker } from '@/components/presentational/home/CollapseWhatIsOrderMaker'
import { NewOrder } from '@/components/presentational/home/NewOrder'
import { Summary } from '@/components/presentational/home/Summary'
import { TPost } from '@/types/PostData'
import { css } from '@emotion/core'
import { Button } from 'antd'
import NextLink from 'next/link'
import React from 'react'

export const HomeContainer = ({ data }: { data: TPost[] }) => {
  return (
    <>
      <Summary />
      <CollapseWhatIsOrderMaker />
      <CollapseBeforeOrderMaking />
      <div className="text-center" css={css({ marginTop: `1rem` })}>
        <NextLink href="/order">
          <a>
            <Button type="primary">ログイン不要！自分の打線を組む</Button>
          </a>
        </NextLink>
      </div>
      <NewOrder data={data} />
    </>
  )
}
