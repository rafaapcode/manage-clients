import { ClientRepository } from '../core/repositories/client.repository';
import { ClientCreateMapper } from '../core/domain/mappers/client-create.mapper';
import { ClientCreateDto } from '../shared/dtos/client.create.dto';
import { IUseCase } from 'src/core/base/use-case';
import { DatabaseInMemory } from 'src/data/memory/DatabaseInMemory';

export class GetAllClientUseCase implements IUseCase<ClientCreateDto[]> {
  private mapper: ClientCreateMapper;
  private clientRepository: ClientRepository;
  public db = new DatabaseInMemory();
  constructor() {
    this.mapper = new ClientCreateMapper();
    this.clientRepository = new ClientRepository(this.db);
  }

  public async execute() {
    const client = await this.clientRepository.getAll();

    return client.map((cli) => this.mapper.mapToUser(cli));
  }
}
