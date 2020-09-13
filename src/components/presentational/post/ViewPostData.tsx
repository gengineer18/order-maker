import { TPostData } from '@/types/PostData'
import { getPositionName } from '@/utils/getPositionName'
import { css } from '@emotion/core'
import { Typography } from 'antd'

const { Title, Text } = Typography

export const ViewPostData = ({ data }: { data: TPostData[] }) => {
  const userName = data && data[0].userName ? data[0].userName : '名無し監督'
  return (
    <>
      <div className="text-center">
        <Title level={3}>
          {data && data[0].title}
          <br />
          <span css={css({ fontSize: `1rem` })}>で打線組んだｗｗ</span>
        </Title>
      </div>
      {data &&
        data.map((data) => {
          return (
            <div css={css({ display: `flex`, alignItems: `center` })} key={data.order}>
              <div className="mr-4">{data.order}</div>
              <div className="rounded border-solid border border-gray-600 p-4 my-2" css={css({ width: `100%` })}>
                <div css={css({ marginBottom: 0, display: `inline-block`, width: `2rem` })}>
                  {getPositionName(data.position)}
                </div>
                <div css={css({ marginBottom: 0, display: `inline-block`, width: `calc(100% - 2rem)` })}>
                  {data.description}
                </div>
              </div>
            </div>
          )
        })}
      <div className="text-center" css={css({ marginTop: `1rem` })}>
        <Text>監督: {userName}</Text>
      </div>
    </>
  )
}
