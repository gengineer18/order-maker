import { Typography } from 'antd'
import Link from 'next/link'
const { Title } = Typography

export default function IndexPage() {
  return (
    <div>
      <Link href="/order">
        <a>
          <Typography>
            <Title type="danger">打線を組む</Title>
          </Typography>
        </a>
      </Link>
    </div>
  )
}
