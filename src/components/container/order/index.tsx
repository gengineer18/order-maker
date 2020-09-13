import { ButtonHome } from '@/components/atoms/buttons/ButtonHome'
import { ButtonTwitter } from '@/components/atoms/buttons/ButtonTwitter'
import { FormComponent } from '@/components/presentational/order/Form'
import { TitleComponent } from '@/components/presentational/order/Title'
import { UserNameComponent } from '@/components/presentational/order/UserName'
import { ViewOrderData } from '@/components/presentational/order/ViewOrderData'
import { Button, Form, message } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const OrderContainer = () => {
  const router = useRouter()
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [isPosting, setIsPosting] = useState<boolean>(false)
  const [orderValues, setOrderValues] = useState(null)
  const [postId, setPostId] = useState('')

  const onFinish = (values) => {
    setIsPosting(true)
    if (validation(values)) {
      axios
        .get('https://asia-northeast1-order-maker.cloudfunctions.net/insertPost', {
          params: values,
        })
        .then((response) => {
          console.log(response.data)
          setPostId(response.data.postId)
          setIsComplete(true)
          setIsPosting(false)
          setOrderValues(values)
        })
        .catch((err) => {
          console.log(err)
          setIsPosting(false)
        })
    } else {
      message.error('ポジションが被ってます！')
      setIsPosting(false)
    }
  }

  const validation = (values): boolean => {
    const positions = [
      values.position1,
      values.position2,
      values.position3,
      values.position4,
      values.position5,
      values.position6,
      values.position7,
      values.position8,
      values.position9,
    ]
    const duplicated = positions.filter((x, _i, self) => self.indexOf(x) !== self.lastIndexOf(x))
    if (duplicated.length > 0) return false
    return true
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const onClickTwitter = () => {
    const title = orderValues ? orderValues.title : ''

    const url = `https://order-maker.woodsatweb.com/post/${postId}`
    const text = encodeURIComponent(`${title} で打線組んだｗｗ`)
    const hashtag = encodeURIComponent('打線組んだメーカー')
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&hashtags=${hashtag}`
    window.open(twitterUrl)
  }

  const onClickBackHome = () => {
    router.push('/')
  }

  return (
    <>
      {!isComplete && (
        <>
          <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <TitleComponent />
            <FormComponent />
            <UserNameComponent />
            <Form.Item>
              <div className="mt-4 text-center">
                <Button type="primary" htmlType="submit" disabled={isPosting}>
                  打線組めたｗｗ
                </Button>
              </div>
            </Form.Item>
          </Form>
          <div className="mt-4 text-center">
            <ButtonHome onClick={onClickBackHome} />
          </div>
        </>
      )}
      {isComplete && (
        <div>
          <ViewOrderData data={orderValues} />
          <div className="text-center">
            <div className="mt-4">
              <ButtonTwitter onClick={onClickTwitter} />
            </div>
            <div className="mt-4">
              <ButtonHome onClick={onClickBackHome} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
