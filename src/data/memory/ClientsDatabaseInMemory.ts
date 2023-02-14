import { Injectable } from '@nestjs/common';
import { ClientEntity } from '../../core/domain/entities/client.entitie';
import { DatabaseInMemory } from './DatabaseInMemory';
import { ClientRepository } from '../../core/repositories/client.repository';

@Injectable()
export class ClientsDatabaseInMmoery
  extends DatabaseInMemory
  implements ClientRepository
{
  constructor() {
    super();
  }
  async create(data: ClientEntity): Promise<ClientEntity> {
    return await super.create(data);
  }
  async update(id: number, data: ClientEntity): Promise<ClientEntity> {
    return await super.update(id, data);
  }
  async patch(id: number, data: Partial<ClientEntity>): Promise<ClientEntity> {
    return await super.patch(id, data);
  }
  async getById(id: number): Promise<ClientEntity> {
    return await super.getById(id);
  }
  async getAll(): Promise<ClientEntity[]> {
    return await super.getAll();
  }
}
