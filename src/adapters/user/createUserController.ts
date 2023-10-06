import Elysia from 'elysia'
import { CreateUserUseCase } from '../../core/user/service/createUserUseCase'

export class CreateUserController {

  constructor(readonly server: Elysia, readonly useCase: CreateUserUseCase) {

    server.post('/users', async ({ body }) => {
      const { name, email, password } = body as any
      await useCase.exec({ name, email, password })

      return {
        status: 200,
        body: {
          message: 'user successfully registered'
        }
      }
    })
  }
}