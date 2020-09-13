import { TwitterOutlined } from '@ant-design/icons'
import { css } from '@emotion/core'
import { Button } from 'antd'
import React from 'react'

const buttonStyle = css({
  color: `white`,
  backgroundColor: `#00acee`,
  '&:hover': {
    color: `white`,
    backgroundColor: `#1ec3ff`,
  },
  '&:focus': {
    color: `white`,
    backgroundColor: `#1ec3ff`,
  },
  height: `36px`,
  fontSize: `0.80.9rem`,
})

export const ButtonTwitter = ({ onClick }) => (
  <Button icon={<TwitterOutlined />} css={buttonStyle} type="link" onClick={onClick}>
    Twitterでシェア
  </Button>
)
