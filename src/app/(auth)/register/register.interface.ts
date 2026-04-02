// Send Data InterFace


export interface userDataType {
  name: string
  email: string
  password: string
  rePassword: string
  phone: string
}

// receive Data InterFace

export interface ReceiveResponse {
  message: string
  user: UserReceive
  token: string
}

export interface UserReceive {
  name: string
  email: string
  role: string
}
