import { ClientRepository } from '../core/repositories/client.repository';
import { ClientCreateMapper } from '../core/domain/mappers/client-create.mapper';
import { ClientCreateDto } from '../shared/dtos/client.create.dto';
import { IUseCase } from 'src/core/base/use-case';

export class PutClientUseCase implements IUseCase<ClientCreateDto> {
  private mapper: ClientCreateMapper;
  constructor(private readonly clientRepository: ClientRepository) {
    this.mapper = new ClientCreateMapper();
  }

  public async execute(id: number, data: ClientCreateDto) {
    const entity = this.mapper.mapFromDatabase(data);
    const client = await this.clientRepository.update(id, entity);

    return this.mapper.mapToUser(client);
  }
}
