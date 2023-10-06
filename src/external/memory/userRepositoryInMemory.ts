import { IUser } from '../../core/user/model/user'
import { IUserRepository } from '../../core/user/service/iUserRepository'

export class UserRepositoryInMemory implements IUserRepository {

  private readonly users: IUser[] = []

  async create(data: IUser): Promise<IUser> {
    const newUser = { ...data, id: Math.random() }
    this.users.push(newUser)
    return newUser
  }

  async consultByEmail(email: string): Promise<IUser | null> {
    return this.users.find((user) => user.email === email) ?? null
  }

  async consultById(id: number): Promise<IUser | null> {
    return this.users.find((user) => user.id === id) ?? null
  }

  async listAll(): Promise<IUser[]> {
    return this.users
  }
}