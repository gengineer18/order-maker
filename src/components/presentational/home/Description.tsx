import { TDescription } from '@/types/Description'
import { Descriptions } from 'antd'

export const Description = ({ description }: { description: TDescription }) => {
  return (
    <Descriptions bordered>
      {description.contents.map((content) => (
        <Descriptions.Item span={3} label={content.label} key={content.label}>
          {content.description}
        </Descriptions.Item>
      ))}
    </Descriptions>
  )
}
