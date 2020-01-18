interface Options {
  slug?: string
  startsWith?: string
  perPage?: number
}

export const getResource = async ({
  slug = '',
  startsWith,
  perPage,
}: Options) => {
  const token = process.env.STORYBLOK_API_KEY
  const json = await fetch(
    `https://api.storyblok.com/v1/cdn/stories/${slug}?version=published&token=${token}${
      startsWith ? `&starts_with=${startsWith}` : ''
    }${perPage ? `&per_page=${perPage}` : ''}&cv=${Math.floor(
      Math.random() * 6
    ) + 1}`
  ).then(res => res.json())
  return json
}

export const getAspectRatioFromImageUrl = src => {
  // Example:
  // https://a.storyblok.com/f/73178/6000x4000/ffcd5d6a59/image.jpg
  const dimensions = src.split('/')[5]
  const [width, height] = dimensions.split('x')
  const aspectRatio = (width / height).toFixed(2)
  return parseFloat(aspectRatio)
}

export const getImageTransform = (src, option) => {
  const imageService = 'https://img2.storyblok.com/'
  const path = src.replace('https://a.storyblok.com', '')
  return imageService + option + path
}

export const getImageSrcSet = src => {
  return `
    ${getImageTransform(src, '100x0')} 100w,
    ${getImageTransform(src, '480x0')} 480w,
    ${getImageTransform(src, '800x0')} 800w,
    ${getImageTransform(src, '1200x0')} 1200w,
    ${getImageTransform(src, '1400x0')} 1400w,
    ${getImageTransform(src, '1600x0')} 1600w,
  `
}
