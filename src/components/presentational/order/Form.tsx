import { css } from '@emotion/core'
import { Form, Input, Select } from 'antd'

const { Option } = Select

export const FormComponent = () => {
  const formPart = (num: number) => (
    <div css={css({ display: `flex`, alignItems: `center` })} key={num}>
      <div className="mr-4">{num}</div>
      <div className="rounded border-solid border border-gray-600 p-4 my-2" css={css({ width: `100%` })}>
        <Form.Item
          name={`position${num}`}
          rules={[{ required: true, message: '入力してください！' }]}
          css={css({ marginBottom: 0, display: `inline-block`, width: `3.5rem` })}
        >
          <Select value={1}>
            <Option value="1">投</Option>
            <Option value="2">捕</Option>
            <Option value="3">一</Option>
            <Option value="4">二</Option>
            <Option value="5">三</Option>
            <Option value="6">遊</Option>
            <Option value="7">左</Option>
            <Option value="8">中</Option>
            <Option value="9">右</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={`description${num}`}
          rules={[{ required: true, message: '入力してください！' }]}
          css={css({ marginBottom: 0, display: `inline-block`, width: `calc(100% - 3.5rem)` })}
        >
          <Input placeholder={`${num}番バッター`} />
        </Form.Item>
      </div>
    </div>
  )

  return (
    <>
      {[...Array(9)].map((_, index) => {
        const order = index + 1
        return formPart(order)
      })}
    </>
  )
}
