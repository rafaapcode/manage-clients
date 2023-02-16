import { ClientRepository } from '../../core/repositories/client.repository';
import { ClientCreateMapper } from '../../core/domain/mappers/client-create.mapper';
import { ClientCreateDto } from '../../shared/dtos/client.create.dto';
import { IUseCase } from 'src/core/base/use-case';
import { ClientPrismaRepository } from '../../data/remote/client-prisma-repository';

export class CreateClientUseCase implements IUseCase<ClientCreateDto> {
  private mapper: ClientCreateMapper;
  private clientRepository: ClientRepository;
  public db = new ClientPrismaRepository();
  constructor() {
    this.mapper = new ClientCreateMapper();
    this.clientRepository = new ClientRepository(this.db);
  }

  public async execute(user: ClientCreateDto) {
    const client = await this.clientRepository.create(
      this.mapper.mapFromDatabase(user),
    );

    return this.mapper.mapToUser(client);
  }
}
