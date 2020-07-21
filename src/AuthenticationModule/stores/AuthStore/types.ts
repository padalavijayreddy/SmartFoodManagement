export interface RequestProps {
   username: string
   password: string
}

export interface LoginResponse {
   access_token: object
   is_user: boolean
}
