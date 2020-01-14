interface Auth {
  password?: string
  method: 'EMAIL' | 'GITHUB' | 'GOOGLE' | 'FACEBOOK'
}

export interface Viewer {
  email?: string
  fullName?: string
  picture?: string
}

export interface User extends Viewer {
  id: string
  auth?: Auth
}
