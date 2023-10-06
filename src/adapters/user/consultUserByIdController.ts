import Elysia from 'elysia'
import { ConsultUserByIdUseCase } from '../../core/user/service/consultUserByIdUseCase'

export class ConsultUserByIdController {

  constructor(readonly server: Elysia, readonly useCase: ConsultUserByIdUseCase) {

    server.get('/users/:id', async ({ params }) => {
      return useCase.exec({ id: Number(params.id) })
    })
  }
}