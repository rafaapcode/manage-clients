import { ClientRepository } from '../core/repositories/client.repository';
import { ClientCreateMapper } from '../core/domain/mappers/client-create.mapper';
import { ClientCreateDto } from '../shared/dtos/client.create.dto';
import { IUseCase } from 'src/core/base/use-case';

export class PatchClientUseCase implements IUseCase<ClientCreateDto> {
  private mapper: ClientCreateMapper;
  constructor(private readonly clientRepository: ClientRepository) {
    this.mapper = new ClientCreateMapper();
  }

  public async execute(id: number, data: Partial<ClientCreateDto>) {
    let entity = {};

    if (Object.keys(data).includes('healthIssues')) {
      entity = { ...data, healthIssues: JSON.stringify(data.healthIssues) };
    } else {
      entity = data;
    }

    const client = await this.clientRepository.patch(id, entity);

    return this.mapper.mapToUser(client);
  }
}
