import { describe, it } from 'node:test';
import {
  CreateClientUseCase,
  GetAllClientUseCase,
  GetByIdClientUseCase,
  PatchClientUseCase,
  PutClientUseCase,
} from './index';
import { DatabaseInMemory } from '../data/memory/DatabaseInMemory';

const mockDatabase = new DatabaseInMemory();

describe('Client use cases', () => {
  beforeAll(() => {
    mockDatabase.allDb = [];
  });

  it('should create a new client', async () => {
    const sut = new CreateClientUseCase(mockDatabase);
    const request = {
      name: 'Joao',
      birthdate: '01/02/2000',
      sex: 'male',
      healthIssues: [{ name: 'diabetes', classification: 1 }],
    };
    const client = await sut.execute(request);
    expect(client).toBeTruthy();
    expect(mockDatabase.allDb.length).toEqual(1);
  });

  it('should return all clients', async () => {
    const sut = new GetAllClientUseCase(mockDatabase);
    const allClient = await sut.execute();
    expect(allClient[0].name).toBe('Joao');
    expect(allClient).toEqual(expect.arrayContaining([expect.any(Object)]));
  });

  it('should return a client by id', async () => {
    const sut = new GetByIdClientUseCase(mockDatabase);
    const client = await sut.execute(1);
    expect(client.name).toBe('Joao');
  });

  it('should return a client with the field updated', async () => {
    const sut = new PatchClientUseCase(mockDatabase);
    const client = await sut.execute(1, { birthdate: '26/09/1997' });
    expect(client.birthdate).toBe('26/09/1997');
  });

  it('should return a client updated', async () => {
    const sut = new PutClientUseCase(mockDatabase);
    const request = {
      name: 'Gabriel Nunes',
      birthdate: '20/12/2015',
      sex: 'male',
      healthIssues: [{ name: 'Preguiça', classification: 2 }],
    };
    const client = await sut.execute(1, request);
    expect(client).toEqual(request);
  });
});
