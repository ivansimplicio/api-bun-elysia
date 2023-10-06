import { IUseCase } from '../../shared/iUseCase'
import { IUserRepository } from './iUserRepository'

interface Input {
  name: string
  email: string
  password: string
}

export class CreateUserUseCase implements IUseCase<Input, void> {

  constructor(private readonly userRepository: IUserRepository) { }

  async exec(input: Input): Promise<void> {
    const { name, email, password } = input

    const userExists = await this.userRepository.consultByEmail(input.email)

    if (userExists) {
      throw new Error('user already exists')
    }

    await this.userRepository.create({
      name,
      email,
      password
    })
  }
}
