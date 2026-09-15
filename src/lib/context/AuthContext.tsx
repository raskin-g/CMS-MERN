import { createContext } from "react";
import type { CredentialsType } from "../../components/Auth/LoginForm";

export interface IUserDetail  {
      id: number | string,
      firstName: string,
      lastName: string,
      maidenName: string,
      birthDate: string,
      gender: string,
      email: string,
      phone: string,
      username: string,
      image: string,
      address: string,
      university: string,
      role: string
    }

export interface IAuthContext{
    loggedInUser: null | IUserDetail,
    login: (data: CredentialsType) => Promise<void | IUserDetail>,
    getLoggedInUser:() =>Promise<void | IUserDetail>
}

export const AuthContext = createContext({
    loggedInUser: null,
    login: async () => {},
    getLoggedInUser: async () => {}
})
