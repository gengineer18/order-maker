import { Layout } from 'antd'
import Link from 'next/link'
import React from 'react'

const AntdHeader = Layout.Header

export const Header = () => {
  return (
    <AntdHeader className="text-center">
      <Link href="/">
        <a>
          <span className="text-white">打線組んだｗｗメーカー</span>
        </a>
      </Link>
    </AntdHeader>
  )
}
