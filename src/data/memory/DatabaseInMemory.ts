import { Injectable } from '@nestjs/common';
import { Respository } from '../../../src/core/base/repository';
import { ClientEntity } from '../../core/domain/entities/client.entitie';

@Injectable()
export class DatabaseInMemory extends Respository<ClientEntity> {
  private databaseInMemory: ClientEntity[];
  private id: number;
  constructor() {
    super();
    this.databaseInMemory = [];
    this.id = 0;
  }

  get allDb() {
    return this.databaseInMemory;
  }

  set allDb(value: any[]) {
    this.databaseInMemory = value;
  }

  async create(data: ClientEntity): Promise<ClientEntity> {
    if (this.databaseInMemory.length === 0) {
      this.id++;
      data.id = this.id;
    } else {
      let lastID = this.databaseInMemory.at(-1).id;
      data.id = lastID++;
    }
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
