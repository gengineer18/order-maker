import { getPositionName } from '@/utils/getPositionName'
import { css } from '@emotion/core'
import { Typography } from 'antd'

const { Title, Text } = Typography

export const ViewOrderData = ({ data }: { data: any }) => {
  console.log(data)
  const arr = data
    ? [
        { order: 1, position: data.position1, description: data.description1 },
        { order: 2, position: data.position2, description: data.description2 },
        { order: 3, position: data.position3, description: data.description3 },
        { order: 4, position: data.position4, description: data.description4 },
        { order: 5, position: data.position5, description: data.description5 },
        { order: 6, position: data.position6, description: data.description6 },
        { order: 7, position: data.position7, description: data.description7 },
        { order: 8, position: data.position8, description: data.description8 },
        { order: 9, position: data.position9, description: data.description9 },
      ]
    : []
  const userName = data && data.userName ? data.userName : '名無し監督'

  return (
    <>
      <div className="text-center">
        <Title level={3}>
          {data && data.title}
          <br />
          <span css={css({ fontSize: `1rem` })}>で打線組んだｗｗ</span>
        </Title>
      </div>
      {data &&
        arr.map((data) => {
          return (
            <div css={css({ display: `flex`, alignItems: `center` })} key={data.order}>
              <div className="mr-4">{data.order}</div>
              <div className="rounded border-solid border border-gray-600 p-4 my-2" css={css({ width: `100%` })}>
                <div css={css({ marginBottom: 0, display: `inline-block`, width: `2rem` })}>
                  {getPositionName(Number(data.position))}
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
