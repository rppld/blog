import * as React from 'react'
import device from '../theme/device'
import { Block } from '../types'
import Figure from './Figure'
import Image from './Image'
import createMarkup from '../utils/create-markup'
import {
  getImageTransform,
  getAspectRatioFromImageUrl,
  getImageSrcSet,
} from '../utils/storyblok'

interface Props {
  name: string
  lede: string
  blocks: [Block]
}

const PostBody: React.FunctionComponent<Props> = ({ name, lede, blocks }) => (
  <article>
    <h1>{name}</h1>

    {lede && (
      <p
        className="lede"
        dangerouslySetInnerHTML={createMarkup(lede, { renderInline: true })}
      />
    )}

    {blocks.map(block =>
      block.component === 'paragraph' ? (
        <p
          key={block._uid}
          dangerouslySetInnerHTML={createMarkup(block.text, {
            renderInline: true,
          })}
        />
      ) : block.component === 'list' ? (
        <figure
          className="list-container"
          key={block._uid}
          dangerouslySetInnerHTML={createMarkup(block.text, {
            renderInline: true,
          })}
        />
      ) : block.component === 'heading' && block.level === '2' ? (
        <h2 key={block._uid}>{block.text}</h2>
      ) : block.component === 'heading' && block.level === '3' ? (
        <h3 key={block._uid}>{block.text}</h3>
      ) : block.component === 'heading' && block.level === '4' ? (
        <h4 key={block._uid}>{block.text}</h4>
      ) : block.component === 'image' ? (
        <Figure
          caption={block.caption}
          key={block._uid}
          padding={block.padding}
          bgColor={block.background_color}
        >
          <Image
            key={block._uid}
            alt={block.alt}
            src={getImageTransform(block.file, '100x0/filters:quality(50)')}
            srcWebp={getImageTransform(
              block.file,
              '100x0/filters:quality(50):format(webp)'
            )}
            srcSet={getImageSrcSet(block.file)}
            srcSetWebp={getImageSrcSet(block.file, 'filters:format(webp)')}
            sizes="(max-width: 768px) 80vw, 100vw"
            aspectRatio={getAspectRatioFromImageUrl(block.file)}
          />
        </Figure>
      ) : null
    )}

    <style jsx global>{`
      article {
        padding-top: var(--space-48);
      }

      article pre,
      article code {
        font-size: 0.875em;
        font-family: Consolas, monaco, monospace;
      }

      article code {
        color: var(--color-gray-9);
        background-color: var(--color-yellow-2);
        border-radius: var(--space-4);
        padding-left: var(--space-4);
        padding-right: var(--space-4);
      }

      article > * {
        padding-left: var(--space-16);
        padding-right: var(--space-16);
        max-width: 960px;
        margin-left: auto;
        margin-right: auto;
      }

      article h1,
      article h2,
      article h3,
      article h4 {
        font-weight: var(--fw-bold);
      }

      article h1,
      article .lede {
        font-weight: var(--fw-black);
        font-size: var(--fs-32);
      }

      article .lede {
        margin-top: 0;
        color: var(--color-text-meta);
        line-height: var(--lh-title);
      }

      article h1,
      article h2,
      article h3,
      article h4,
      article .lede {
        text-indent: -0.0125em;
        letter-spacing: -0.035em;
      }

      article h2,
      article h3,
      article h4 {
        font-size: var(--fs-24);
        margin-top: var(--space-48);
      }

      article h2 {
        font-size: var(--fs-24);
      }

      article h3 {
        font-size: var(--fs-20);
      }

      article h4 {
        font-size: var(--fs-16);
      }

      article figure:not(.list-container) {
        margin-top: var(--space-24);
        margin-bottom: var(--space-24);
        padding: 0;
      }

      article > * + * {
        margin-top: var(--space-24);
      }

      article ul {
        list-style-type: disc;
      }

      article ol {
        list-style-type: decimal;
      }

      article ul,
      article ol {
        padding-left: var(--space-32);
      }

      article p,
      article ul,
      article ol {
        letter-spacing: var(--ls-1);
        font-weight: 400;
        font-size: var(--fs-18);
      }

      @media ${device.mobileLg} {
        article p,
        article ul,
        article ol {
          font-size: var(--fs-20);
        }
      }

      @media ${device.tablet} {
        article {
          padding-top: var(--space-64);
        }

        article > * {
          padding-left: var(--space-32);
          padding-right: var(--space-32);
        }

        article h1,
        article .lede {
          font-size: var(--fs-48);
        }

        article h2,
        article h3,
        article h4 {
          margin-top: var(--space-64);
        }

        article h2 {
          font-size: var(--fs-32);
        }

        article h3 {
          font-size: var(--fs-24);
        }

        article h4 {
          font-size: var(--fs-20);
        }

        article figure:not(.list-container) {
          margin-top: var(--space-64);
          margin-bottom: var(--space-64);
        }

        article > * + * {
          margin-top: var(--space-32);
        }

        article p,
        article ul,
        article ol {
          font-size: var(--fs-24);
        }
      }

      @media ${device.laptop} {
        article ul,
        article ol {
          padding: 0;
        }

        article > * {
          padding-left: var(--space-64);
          padding-right: var(--space-64);
        }
      }
    `}</style>
  </article>
)

export default PostBody
