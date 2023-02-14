import { ClientRepository } from '../core/repositories/client.repository';
import { ClientCreateMapper } from '../core/domain/mappers/client-create.mapper';
import { ClientCreateDto } from '../shared/dtos/client.create.dto';
import { IUseCase } from 'src/core/base/use-case';

export class GetAllClientUseCase implements IUseCase<ClientCreateDto[]> {
  private mapper: ClientCreateMapper;
  constructor(private readonly clientRepository: ClientRepository) {
    this.mapper = new ClientCreateMapper();
  }

  public async execute() {
    const client = await this.clientRepository.getAll();

    return client.map((cli) => this.mapper.mapToUser(cli));
  }
}
