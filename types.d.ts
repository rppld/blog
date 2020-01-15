interface PostBody {
  text: string
  component: string
}

interface Post {
  body: [PostBody]
  component: string
  featured_image: string
}

interface Page {
  component: string
  intro: string
}

export interface Story {
  name: string
  created_at: string
  published_at: string
  alternates: []
  id: number
  uuid: string
  content: Page
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
