import { css } from '@emotion/core'
import { Form, Input } from 'antd'

export const TitleComponent = () => {
  return (
    <div className="text-center">
      <Form.Item
        name="title"
        rules={[{ required: true, message: '入力してください！' }]}
        css={css({ marginBottom: 0 })}
      >
        <Input placeholder="打線のテーマ" />
      </Form.Item>
      <span css={css({ fontWeight: `bold`, fontSize: `1rem` })}>で打線組んだｗｗ</span>
    </div>
  )
}
