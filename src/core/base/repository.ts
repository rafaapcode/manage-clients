import { Entity } from './entity';

export abstract class Respository<TEntity extends Entity> {
  abstract create(data: TEntity): Promise<TEntity>;
  abstract update(id: number, data: TEntity): Promise<TEntity>;
  abstract patch(id: number, data: Partial<TEntity>): Promise<TEntity>;
  abstract getById(id: number): Promise<TEntity>;
  abstract getAll(): Promise<TEntity[]>;
}
