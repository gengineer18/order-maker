import { css } from '@emotion/core'
import { Form, Input } from 'antd'

export const UserNameComponent = () => {
  return (
    <div css={css({ display: `flex`, alignItems: `center`, margin: `1rem 0` })}>
      <div className="mr-4">監督</div>
      <Form.Item name={`userName`} css={css({ marginBottom: 0, display: `inline-block`, width: `100%` })}>
        <Input placeholder={`あなたの名前(未入力なら「名無し監督」になります)`} />
      </Form.Item>
    </div>
  )
}
