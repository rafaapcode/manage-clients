import { PrismaClient } from '@prisma/client';
import { Respository } from 'src/core/base/repository';
import { ClientEntity } from 'src/core/domain/entities/client.entitie';
const prisma = new PrismaClient();

export class ClientPrismaRepository extends Respository<ClientEntity> {
  constructor() {
    super();
  }
  async create(data: ClientEntity): Promise<ClientEntity> {
    throw new Error('Method not implemented.');
  }
  async update(id: number, data: ClientEntity): Promise<ClientEntity> {
    throw new Error('Method not implemented.');
  }
  async patch(id: number, data: Partial<ClientEntity>): Promise<ClientEntity> {
    throw new Error('Method not implemented.');
  }
  async getById(id: number): Promise<ClientEntity> {
    throw new Error('Method not implemented.');
  }
  async getAll(): Promise<ClientEntity[]> {
    throw new Error('Method not implemented.');
  }
}
