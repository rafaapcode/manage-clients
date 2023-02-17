import { ClientRepository } from '../core/repositories/client.repository';
import { ClientCreateMapper } from '../core/domain/mappers/client-create.mapper';
import { ClientCreateDto } from '../shared/dtos/client.create.dto';
import { IUseCase } from 'src/core/base/use-case';
import { Respository } from 'src/core/base/repository';
import { ClientEntity } from 'src/core/domain/entities/client.entitie';

export class GetAllClientUseCase implements IUseCase<ClientCreateDto[]> {
  private mapper: ClientCreateMapper;
  private clientRepository: ClientRepository;
  constructor(database: Respository<ClientEntity>) {
    this.mapper = new ClientCreateMapper();
    this.clientRepository = new ClientRepository(database);
  }

  public async execute() {
    const client = await this.clientRepository.getAll();

    return client.map((cli) => this.mapper.mapToUser(cli));
  }
}
