import { Button, Typography } from 'antd'
import Link from 'next/link'
import Greeting from 'src/components/Greeting'
const { Title } = Typography

const test = (theme) => ({ color: theme.colors.secondary })

export default function OrderPage() {
  return (
    <div>
      <div className="py-20">
        <Greeting target={'Next.js Starter Kit'} />
        <Typography>
          <Title type="danger">Introduction</Title>
        </Typography>
        <Button color="primary">test</Button>
        <Link href="/">
          <a>
            <span css={test}>home</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
