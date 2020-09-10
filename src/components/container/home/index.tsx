import { Description } from '@/components/presentational/home/Description'
import { TDescription } from '@/types/Description'
import { Button, Collapse, Typography } from 'antd'
import Link from 'next/link'
const { Panel } = Collapse

const orderDescription: TDescription = {
  title: '打順（印象）',
  contents: [
    { label: '1', description: 'わかりやすい・即効性' },
    { label: '2', description: '手堅さ' },
    { label: '3', description: 'バランス感' },
    { label: '4', description: '問答無用の破壊力 ネタ系ならここでいちど笑わせておきたい' },
    { label: '5', description: '4に続くインパクト' },
    { label: '6', description: '傑作ではないが光るものがある' },
    { label: '7', description: '地味だが抑えておきたいもの' },
    { label: '8', description: '打線に組み入れたいと思ったなかで最後まで残ったやつ' },
    { label: '9', description: 'いちばん華があるもの（ここに投手を入れない場合はその限りではない）' },
  ],
}

const positionDescription: TDescription = {
  title: '守備（内容）',
  contents: [
    { label: '投手', description: 'ほぼ9番打者枠のため、打順ネタの〆としていちばん優れているもの' },
    { label: '捕手', description: '多くの人間の共感を得られるであろう安定感のあるもの' },
    { label: '一塁手', description: '知名度や認知度が高く、良かれ悪しかれ話題になるとっかかりがあるもの' },
    { label: '二塁手', description: 'スルメ' },
    { label: '遊撃手', description: '技巧的に優れているもの' },
    { label: '三塁手', description: '攻めの姿勢が強いもの' },
    { label: '左翼手', description: 'マイナー志向' },
    { label: '中堅手', description: 'オールマイティー志向' },
    { label: '右翼手', description: '荒削りではあるが力強いもの' },
  ],
}

export const HomeContainer = () => {
  return (
    <div>
      <Typography className="text-center">思い思いの打線を組んで、Twitterで公開できるサイトです。</Typography>
      <Typography className="text-center">あなたのオリジナリティ溢れる打線を作りましょう！</Typography>
      <Collapse>
        <Panel header="「打線組んだ」とは？ (なんJ用語集wikiより引用)" key="whatIsOrderMaker">
          <blockquote>
            <p>様々な物事の評価を野球の打線（スターティング・メンバー）の形式で表すスレのこと。</p>
            <p>「打順組んだ」「スタメン組んだ」などとも呼ばれる。</p>
            <p>実際に打線が組まれる物事は、人物はもちろん、食べ物、作品、名言、事件など多岐にわたる。</p>
          </blockquote>
          <p>
            引用元:{' '}
            <a
              href="https://wikiwiki.jp/livejupiter/%E6%89%93%E7%B7%9A%E7%B5%84%E3%82%93%E3%81%A0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <cite>https://wikiwiki.jp/livejupiter/打線組んだ</cite>
            </a>
          </p>
        </Panel>
      </Collapse>
      <Collapse>
        <Panel header="打線を組む前に （ニコニコ大百科より引用）" key="BeforeOrderMaking">
          <blockquote>
            <p>まず重要なのは「打線の意味」を理解するところだろう。</p>
            <p>打線で記述する内容は、「打順」「守備位置」「選手名（書きたい内容）」を9人分である。</p>
            <p>以下に打順と守備位置、それぞれの「大まかなイメージ」を記述する。</p>
            <Collapse>
              <Panel header={orderDescription.title} key="orderDescription">
                <Description description={orderDescription} />
              </Panel>
            </Collapse>
            <Collapse>
              <Panel header={positionDescription.title} key="orderDescription">
                <Description description={positionDescription} />
              </Panel>
            </Collapse>
          </blockquote>
          <p>
            引用元:{' '}
            <a
              href="https://dic.nicovideo.jp/a/%E3%80%9C%E3%81%A7%E6%89%93%E7%B7%9A%E7%B5%84%E3%82%93%E3%81%A0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <cite>https://dic.nicovideo.jp/a/〜で打線組んだ</cite>
            </a>
          </p>
        </Panel>
      </Collapse>
      <Link href="/order">
        <a>
          <Button block type="primary">
            ログイン不要！自分の打線を組む
          </Button>
        </a>
      </Link>
      <Typography>新着の打順</Typography>
    </div>
  )
}
