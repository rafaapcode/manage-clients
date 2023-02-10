import { Entity } from '../../base/entity';

export class ClientEntity extends Entity {
  public id?: number;
  public name: string;
  public birthdate: string;
  public sex: string;
  public healthIssues: string;
}
