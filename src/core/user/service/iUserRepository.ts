import { IUser } from '../model/user'

export interface IUserRepository {
  create(data: IUser): Promise<IUser>
  consultByEmail(email: string): Promise<IUser | null>
  consultById(id: number): Promise<IUser | null>
  listAll(): Promise<IUser[]>
}