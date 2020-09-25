import qs from 'querystringify'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'

// Returns a random integer between min (inclusive) and max
// (inclusive). The value is no lower than min (or the next integer
// greater than min if min isn't an integer) and no greater than max
// (or the next integer lower than max if max isn't an integer). Using
// Math.round() will give you a non-uniform distribution!
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

type FilterQuery = {
  attribute: string
  operation: string
  query: string
}

interface Options {
  slug?: string
  startsWith?: string
  perPage?: number
  version?: string
  sortBy?: string
  withTag?: string
  resolveRelations?: string
  filterQuery?: FilterQuery
}

export const getResource = async ({
  slug = '',
  startsWith,
  version = 'published',
  perPage,
  resolveRelations,
  sortBy,
  withTag,
  filterQuery,
}: Options) => {
  const token = process.env.STORYBLOK_API_KEY
  const { attribute, operation, query } = filterQuery || {}
  const options = {
    version,
    token,
    starts_with: startsWith,
    sort_by: sortBy,
    with_tag: withTag,
    per_page: perPage,
    ...(filterQuery
      ? { [`filter_query[${attribute}][${operation}]`]: query }
      : {}),
    resolve_relations: resolveRelations,
    cv: getRandomInt(10000, 99999),
  }
  const querystring = qs.stringify(pickBy(options, identity))
  const json = await fetch(
    `https://api.storyblok.com/v1/cdn/stories/${slug}?${querystring}`
  ).then((res) => res.json())
  return json
}

export const getAspectRatioFromImageUrl = (src) => {
  // Example:
  // https://a.storyblok.com/f/73178/6000x4000/ffcd5d6a59/image.jpg
  const dimensions = src.split('/')[5]
  const [width, height] = dimensions.split('x')
  const aspectRatio = (width / height).toFixed(2)
  return parseFloat(aspectRatio)
}

export const getImageTransform = (src, option) => {
  const imageService = '//img2.storyblok.com/'
  const path = src.replace('//a.storyblok.com', '')
  return imageService + option + path
}

export const getImageSrcSet = (src, option?: string) => {
  // Add leading slash if option is defined.
  const filter = typeof option !== 'undefined' ? `/${option}` : ''

  return `
    ${getImageTransform(src, `100x0${filter}`)} 100w,
    ${getImageTransform(src, `480x0${filter}`)} 480w,
    ${getImageTransform(src, `800x0${filter}`)} 800w,
    ${getImageTransform(src, `1200x0${filter}`)} 1200w,
    ${getImageTransform(src, `1400x0${filter}`)} 1400w,
    ${getImageTransform(src, `1600x0${filter}`)} 1600w,
    ${getImageTransform(src, `2000x0${filter}`)} 2000w,
  `
}
