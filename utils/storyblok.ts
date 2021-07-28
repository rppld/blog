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

export const getDimensionsFromImageUrl = (src) => {
  // Example:
  // https://a.storyblok.com/f/73178/6000x4000/ffcd5d6a59/image.jpg
  const dimensions = src.split('/')[5]
  const [width, height] = dimensions.split('x')
  return { width, height }
}

export const getImageTransform = (src, option = '') => {
  const imageService = 'https://img2.storyblok.com/'
  const path = src.replace('//a.storyblok.com', '')
  return imageService + option + path
}
