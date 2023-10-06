import app from './external/api/config'

// import { UserRepositoryInMemory } from './external/memory/userRepositoryInMemory'
import { UserRepositoryPrisma } from './external/prisma/userRepositoryPrisma'

import { CreateUserController } from './adapters/user/createUserController'
import { ListUsersController } from './adapters/user/listUsersController'
import { ConsultUserByIdController } from './adapters/user/consultUserByIdController'

import { CreateUserUseCase } from './core/user/service/createUserUseCase'
import { ListUsersUseCase } from './core/user/service/listUsersUseCase'
import { ConsultUserByIdUseCase } from './core/user/service/consultUserByIdUseCase'

// const userRepository = new UserRepositoryInMemory()
const userRepository = new UserRepositoryPrisma()

const createUser = new CreateUserUseCase(userRepository)
const listUsers = new ListUsersUseCase(userRepository)
const consultUserById = new ConsultUserByIdUseCase(userRepository)

new CreateUserController(app, createUser)
new ListUsersController(app, listUsers)
new ConsultUserByIdController(app, consultUserById)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
