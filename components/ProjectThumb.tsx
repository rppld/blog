import * as React from 'react'
import Figure from './Figure'
import device from '../theme/device'

interface Props {
  name: string
  content: {
    featured_image: string
    background_color: string
  }
}

const ProjectThumb: React.FunctionComponent<Props> = ({ name, content }) => {
  const { featured_image: featuredImage, background_color: bgColor } = content

  return (
    <Figure caption={name}>
      <div>
        <img src={featuredImage} alt={name} />
      </div>

      <style jsx>{`
        div {
          padding: var(--space-64);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media ${device.mobileLg} {
          div {
            padding: var(--space-64);
          }
        }

        @media ${device.laptop} {
          div {
            padding: var(--space-96);
          }
        }

        @media ${device.laptopMd} {
          div {
            padding: var(--space-128);
          }
        }
      `}</style>

      <style jsx>{`
        div {
          background-color: ${bgColor};
        }
      `}</style>
    </Figure>
  )
}

export default ProjectThumb
