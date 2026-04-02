// Send Data InterFace


export interface userDataTypeLogin {
  email: string
  password: string

}

// receive Data InterFace

export interface ReceiveResponseLogin {
  message: string
  user: UserReceiveLogin
  token: string
}

export interface UserReceiveLogin {
  name: string
  email: string
  role: string
}
