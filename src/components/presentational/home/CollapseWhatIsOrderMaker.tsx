import { css } from '@emotion/core'
import { Collapse, Typography } from 'antd'
import React from 'react'

const { Panel } = Collapse
const { Link } = Typography

export const CollapseWhatIsOrderMaker = () => {
  return (
    <section>
      <Collapse css={css({ marginTop: `1rem` })}>
        <Panel header="「打線組んだ」とは？ (なんJ用語集wikiより引用)" key="whatIsOrderMaker">
          <blockquote>
            <p>様々な物事の評価を野球の打線（スターティング・メンバー）の形式で表すスレのこと。</p>
            <p>「打順組んだ」「スタメン組んだ」などとも呼ばれる。</p>
            <p>実際に打線が組まれる物事は、人物はもちろん、食べ物、作品、名言、事件など多岐にわたる。</p>
          </blockquote>
          <p>
            引用元:{' '}
            <Link
              href="https://wikiwiki.jp/livejupiter/%E6%89%93%E7%B7%9A%E7%B5%84%E3%82%93%E3%81%A0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <cite>https://wikiwiki.jp/livejupiter/打線組んだ</cite>
            </Link>
          </p>
        </Panel>
      </Collapse>
    </section>
  )
}
