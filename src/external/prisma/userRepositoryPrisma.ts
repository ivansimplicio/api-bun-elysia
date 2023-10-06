import { PrismaClient } from '@prisma/client'
import { IUser } from '../../core/user/model/user'
import { IUserRepository } from '../../core/user/service/iUserRepository'

export class UserRepositoryPrisma implements IUserRepository {

  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(data: IUser): Promise<IUser> {
    return this.prisma.user.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
  }

  async consultByEmail(email: string): Promise<IUser | null> {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  async consultById(id: number): Promise<IUser | null> {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }

  async listAll(): Promise<IUser[]> {
    return this.prisma.user.findMany()
  }
}