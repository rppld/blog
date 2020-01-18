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
  content: Page | Post | Photo
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

export interface Page extends Story {
  content: {
    component: string
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

export interface Photo extends Story {
  content: {
    image: string
  }
}
