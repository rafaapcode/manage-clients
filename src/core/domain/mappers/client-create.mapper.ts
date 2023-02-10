import { Mapper } from 'src/core/base/mapper';
import { ClientEntity } from '../entities/client.entitie';
import { ClientCreateDto } from '../../../shared/dtos/client.create.dto';

export class ClientCreateMapper extends Mapper<ClientCreateDto, ClientEntity> {
  mapFromDatabase(param: ClientCreateDto): ClientEntity {
    let client = new ClientEntity();
    client = { ...param, healthIssues: JSON.stringify(param.healthIssues) };
    return client;
  }
  mapToUser(param: ClientEntity): ClientCreateDto {
    return { ...param, healthIssues: JSON.parse(param.healthIssues) };
  }
}
