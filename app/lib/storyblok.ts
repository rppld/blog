import qs from "querystringify";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

// Returns a random integer between min (inclusive) and max
// (inclusive). The value is no lower than min (or the next integer
// greater than min if min isn't an integer) and no greater than max
// (or the next integer lower than max if max isn't an integer). Using
// Math.round() will give you a non-uniform distribution!
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type FilterQuery = {
  attribute: string;
  operation: string;
  query: string;
};

interface Options {
  slug?: string;
  startsWith?: string;
  perPage?: number;
  version?: string;
  sortBy?: string;
  withTag?: string;
  resolveRelations?: string;
  filterQuery?: FilterQuery;
}

export async function getResource<T>({
  slug = "",
  startsWith,
  version = "published",
  perPage,
  resolveRelations,
  sortBy,
  withTag,
  filterQuery,
}: Options): Promise<T> {
  const { attribute, operation, query } = filterQuery || {};
  const options = {
    version,
    token: STORYBLOK_API_KEY,
    starts_with: startsWith,
    sort_by: sortBy,
    with_tag: withTag,
    per_page: perPage,
    ...(filterQuery
      ? { [`filter_query[${attribute}][${operation}]`]: query }
      : {}),
    resolve_relations: resolveRelations,
    cv: getRandomInt(10000, 99999),
  };
  const querystring = qs.stringify(pickBy(options, identity));
  const json: T = await fetch(
    `https://api.storyblok.com/v1/cdn/stories/${slug}?${querystring}`
  ).then((res) => res.json());
  return json;
}

export const getAspectRatioFromImageUrl = (src: string) => {
  // Example:
  // https://a.storyblok.com/f/73178/6000x4000/ffcd5d6a59/image.jpg
  const dimensions = src.split("/")[5];
  const [width, height] = dimensions.split("x");
  const aspectRatio = (Number(width) / Number(height)).toFixed(2);
  return parseFloat(aspectRatio);
};

export const getImageTransform = (src: string, option: string) => {
  const imageService = "//img2.storyblok.com/";
  const path = src.replace("//a.storyblok.com", "");
  return imageService + option + path;
};

export const getImageSrcSet = (src: string, option?: string) => {
  // Add leading slash if option is defined.
  const filter = typeof option !== "undefined" ? `/${option}` : "";

  return `
    ${getImageTransform(src, `100x0${filter}`)} 100w,
    ${getImageTransform(src, `480x0${filter}`)} 480w,
    ${getImageTransform(src, `800x0${filter}`)} 800w,
    ${getImageTransform(src, `1200x0${filter}`)} 1200w,
    ${getImageTransform(src, `1400x0${filter}`)} 1400w,
    ${getImageTransform(src, `1600x0${filter}`)} 1600w,
    ${getImageTransform(src, `2000x0${filter}`)} 2000w,
  `;
};

interface Block {
  _uid: string;
  /**
   * The block type
   */
  component: string;
  level?: string;
  text?: string;
  alt?: string;
  file?: string;
  caption?: string;
  padding?: string[];
  background_color?: string;
}

interface Story {
  name: string;
  created_at: string;
  first_published_at: string;
  id: number;
  slug: string;
}

interface Post extends Story {
  content: {
    featured_image: string;
    background_color: string;
    lede: string;
    body: Block[];
  };
}

interface Photo extends Story {
  content: {
    file: string;
    alt: string;
    caption?: string;
  };
}

interface Homepage extends Story {
  content: {
    title: string;
    lede: string;
  };
}

interface Image {
  alt: string;
  caption?: string;
  file: string;
}

interface Photospage extends Story {
  content: {
    intro: string;
    images: Image[];
  };
}

export type { Photospage, Homepage, Photo, Post };
