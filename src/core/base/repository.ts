import { Observable } from 'rxjs';
import { Entity } from './entity';

abstract class Respository<TEntity extends Entity> {
  abstract create(data: TEntity): Observable<TEntity>;
  abstract update(id: number, data: TEntity): Observable<TEntity>;
  abstract patch(id: number, data: Partial<TEntity>): Observable<TEntity>;
  abstract getById(id: number): Observable<TEntity>;
  abstract getAll(): Observable<TEntity[]>;
}
