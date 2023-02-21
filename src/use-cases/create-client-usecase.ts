import { ClientEntity } from '../core/domain/entities/client.entitie';
import { ClientRepository } from '../core/repositories/client.repository';
import { ClientCreateMapper } from '../core/domain/mappers/client-create.mapper';
import { ClientCreateDto } from '../shared/dtos/client.create.dto';
import { IUseCase } from '../core/base/use-case';
import { Respository } from '../core/base/repository';

export class CreateClientUseCase implements IUseCase<ClientCreateDto> {
  private mapper: ClientCreateMapper;
  private clientRepository: ClientRepository;
  constructor(database: Respository<ClientEntity>) {
    this.mapper = new ClientCreateMapper();
    this.clientRepository = new ClientRepository(database);
  }

  public async execute(user: ClientCreateDto) {
    const client = await this.clientRepository.create(
      this.mapper.mapFromDatabase(user),
    );

    return this.mapper.mapToUser(client);
  }
}
