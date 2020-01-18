interface PostBody {
  text: string
  component: string
}

interface Story {
  name: string
  created_at: string
  published_at: string
  alternates: []
  id: number
  uuid: string
  slug: string
  full_slug: string
  sort_by_date: boolean
  position: number
  tag_list: []
  is_startpage: boolean
  parent_id: number
  group_id: string
  lang: string
}

export interface Homepage extends Story {
  content: {
    intro: string
  }
}

export interface Post extends Story {
  content: {
    body: [PostBody]
    component: string
    featured_image: string
  }
}

interface Photo {
  name: string
  filename: string
}

export interface Photospage extends Story {
  content: {
    intro: string
    images: [Photo]
  }
}
