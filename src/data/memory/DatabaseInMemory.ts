import { Injectable } from '@nestjs/common';
import { Respository } from 'src/core/base/repository';
import { ClientEntity } from '../../core/domain/entities/client.entitie';

@Injectable()
export class DatabaseInMemory extends Respository<ClientEntity> {
  private databaseInMemory: ClientEntity[];
  constructor() {
    super();
    this.databaseInMemory = [];
  }

  get allDb() {
    return this.databaseInMemory;
  }

  async create(data: ClientEntity): Promise<ClientEntity> {
    this.databaseInMemory.push(data);

    return data;
  }
  async update(id: number, data: ClientEntity): Promise<ClientEntity> {
    const clientIndex = this.databaseInMemory.findIndex(
      (client) => client.id === id,
    );
    this.databaseInMemory[clientIndex] = data;

    return data;
  }
  async patch(id: number, data: Partial<ClientEntity>): Promise<ClientEntity> {
    const clientIndex = this.databaseInMemory.findIndex(
      (client) => client.id === id,
    );
    this.databaseInMemory[clientIndex] = {
      ...this.databaseInMemory[clientIndex],
      ...data,
    };

    return this.databaseInMemory[clientIndex];
  }
  async getById(id: number): Promise<ClientEntity> {
    const clientIndex = this.databaseInMemory.findIndex(
      (client) => client.id === id,
    );

    return this.databaseInMemory[clientIndex];
  }
  async getAll(): Promise<ClientEntity[]> {
    return this.databaseInMemory;
  }
}
