interface Block {
  _uid: string
  component: string // The block type
  text?: string
  alt?: string
  file?: string
  caption?: string
  padding?: string[]
  background_color?: string
}

interface Story {
  name: string
  created_at: string
  id: number
  slug: string
}

export interface Post extends Story {
  content: {
    featured_image: string
    background_color: string
    lede: string
    body: [Block]
  }
}

export interface Homepage extends Story {
  content: {
    intro: string
    portfolio: [Post]
  }
}

interface Image {
  alt: string
  caption?: string
  file: string
}

export interface Photospage extends Story {
  content: {
    intro: string
    images: [Image]
  }
}
