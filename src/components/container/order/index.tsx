import { FormComponent } from '@/components/presentational/order/Form'
import { TitleComponent } from '@/components/presentational/order/Title'
import { Button, Form } from 'antd'
import axios from 'axios'

export const OrderContainer = () => {
  const onFinish = (values) => {
    axios
      .get('https://asia-northeast1-order-maker.cloudfunctions.net/insertPost', {
        params: values,
      })
      .then((response) => {
        console.log(response.data)
      })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <TitleComponent />
        <FormComponent />
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            打線組めたｗｗ
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
