import { ClientRepository } from '../core/repositories/client.repository';
import { ClientCreateMapper } from '../core/domain/mappers/client-create.mapper';
import { ClientCreateDto } from '../shared/dtos/client.create.dto';
import { IUseCase } from 'src/core/base/use-case';
import { DatabaseInMemory } from 'src/data/memory/DatabaseInMemory';

export class PutClientUseCase implements IUseCase<ClientCreateDto> {
  private mapper: ClientCreateMapper;
  private clientRepository: ClientRepository;
  public db = new DatabaseInMemory();
  constructor() {
    this.mapper = new ClientCreateMapper();
    this.clientRepository = new ClientRepository(this.db);
  }

  public async execute(id: number, data: ClientCreateDto) {
    const entity = this.mapper.mapFromDatabase(data);
    const client = await this.clientRepository.update(id, entity);

    return this.mapper.mapToUser(client);
  }
}
