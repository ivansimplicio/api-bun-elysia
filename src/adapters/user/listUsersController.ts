import Elysia from 'elysia'
import { ListUsersUseCase } from '../../core/user/service/listUsersUseCase'

export class ListUsersController {

  constructor(readonly server: Elysia, readonly useCase: ListUsersUseCase) {

    server.get('/users', async () => {
      return useCase.exec()
    })
  }
}