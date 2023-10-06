import { IUseCase } from '../../shared/iUseCase'
import { IUser } from '../model/user'
import { IUserRepository } from './iUserRepository'

interface Input {
  id: number
}

export class ConsultUserByIdUseCase implements IUseCase<Input, IUser | null> {

  constructor(readonly userRepository: IUserRepository) { }

  async exec(input: Input): Promise<IUser | null> {
    return this.userRepository.consultById(input.id)
  }
} 