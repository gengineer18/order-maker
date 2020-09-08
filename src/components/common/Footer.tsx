import { Layout } from 'antd'
import React from 'react'

const AntdFooter = Layout.Footer

export const Footer = () => {
  return (
    <AntdFooter>
      <span className="text-indigo-900">Copyright © 2020 Woods At Web</span>
    </AntdFooter>
  )
}
