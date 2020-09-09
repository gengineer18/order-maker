import { OrderContainer } from '@/components/container/order/index'
import Link from 'next/link'

const test = (theme) => ({ color: theme.colors.secondary })

export default function OrderPage() {
  return (
    <div className="px-4 py-5">
      <OrderContainer />
      <Link href="/">
        <a>
          <span css={test}>home</span>
        </a>
      </Link>
    </div>
  )
}
