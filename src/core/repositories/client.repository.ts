import { Respository } from '../base/repository';
import { ClientEntity } from '../domain/entities/client.entitie';

export class ClientRepository extends Respository<ClientEntity> {
  db: Respository<ClientEntity>;
  constructor(public database: Respository<ClientEntity>) {
    super();
    this.db = database;
  }

  async create(data: ClientEntity): Promise<ClientEntity> {
    return await this.db.create(data);
  }
  async update(id: number, data: ClientEntity): Promise<ClientEntity> {
    return await this.db.update(id, data);
  }
  async patch(id: number, data: Partial<ClientEntity>): Promise<ClientEntity> {
    return await this.db.patch(id, data);
  }
  async getById(id: number): Promise<ClientEntity> {
    return await this.db.getById(id);
  }
  async getAll(): Promise<ClientEntity[]> {
    return await this.db.getAll();
  }
}
