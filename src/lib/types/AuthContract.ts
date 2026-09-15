import * as z from "zod"

export const LoginDTO = z.object({
    username: z.string().min(4, "Username must have at least 4 characters").max(30, "Username must not exceed 30 characters"),
    password: z.string().min(8, "Password must have at least 8 characters").max(32, "Password must not exceed 32 characters")
});

export type CredentialsType = z.infer<typeof LoginDTO>

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