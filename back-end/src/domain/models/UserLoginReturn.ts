import { UserDataReturn } from "./UserDataReturn"

export interface UserLoginReturn {
    returnData: UserDataReturn,
    access_token: string
}