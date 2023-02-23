import { PrismaClient } from '@prisma/client';
import { Respository } from '../../core/base/repository';
import { ClientEntity } from '../../core/domain/entities/client.entitie';

export class ClientPrismaRepository extends Respository<ClientEntity> {
  private prisma = new PrismaClient();
  constructor() {
    super();
  }
  async create(data: ClientEntity): Promise<ClientEntity> {
    return await this.prisma.client.create({
      data,
    });
  }
  async update(id: number, data: ClientEntity): Promise<ClientEntity> {
    return await this.prisma.client.update({
      where: { id },
      data,
    });
  }
  async patch(id: number, data: Partial<ClientEntity>): Promise<ClientEntity> {
    return await this.prisma.client.update({
      where: { id },
      data,
    });
  }
  async getById(id: number): Promise<ClientEntity> {
    return await this.prisma.client.findFirst({ where: { id } });
  }
  async getAll(): Promise<ClientEntity[]> {
    return await this.prisma.client.findMany();
  }
}
