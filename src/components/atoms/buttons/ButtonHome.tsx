import { HomeOutlined } from '@ant-design/icons'
import { css } from '@emotion/core'
import { Button } from 'antd'
import React from 'react'

const buttonStyle = css({
  height: `36px`,
  fontSize: `0.80.9rem`,
})

export const ButtonHome = ({ onClick }) => (
  <Button icon={<HomeOutlined />} css={buttonStyle} type="link" onClick={onClick}>
    ホームへ戻る
  </Button>
)
