import { USER_ROLES } from "../model/User"

export type authenticationData = {
    id: string
    role: USER_ROLES
}