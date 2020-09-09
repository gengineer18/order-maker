import { FormComponent } from '@/components/presentational/order/Form'
import { TitleComponent } from '@/components/presentational/order/Title'
import { css } from '@emotion/core'
import { Button, Form } from 'antd'

export const OrderContainer = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <TitleComponent />
        <FormComponent />
        <div css={css({ maxWidth: `760px`, margin: `auto` })}>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              打線組めたｗｗ
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  )
}
