import { Respository } from '../base/repository';
import { ClientEntity } from '../domain/entities/client.entitie';

export abstract class ClientRepository extends Respository<ClientEntity> {}
