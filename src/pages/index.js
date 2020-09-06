import { Button, Typography } from 'antd'
import Greeting from 'src/components/Greeting'
const { Title } = Typography

const test = (theme) => ({ color: theme.colors.secondary })

export default function IndexPage() {
  return (
    <div>
      <div className="py-20">
        <Greeting target={'Next.js Starter Kit'} />
        <Typography>
          <Title type="danger">Introduction</Title>
        </Typography>
        <Button color="primary">test</Button>
        <span css={test}>jjj</span>
      </div>
    </div>
  )
}
