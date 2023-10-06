import { IUseCase } from '../../shared/iUseCase'
import { IUser } from '../model/user'
import { IUserRepository } from './iUserRepository'

export class ListUsersUseCase implements IUseCase<void, IUser[]> {

  constructor(readonly userRepository: IUserRepository) { }

  async exec(): Promise<IUser[]> {
    return this.userRepository.listAll()
  }
} 