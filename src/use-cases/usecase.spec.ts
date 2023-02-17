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
  });
  it('should return a client by id', async () => {
    const sut = new GetByIdClientUseCase(mockDatabase);
  });
  it('should return a client with de field updated', async () => {
    const sut = new PatchClientUseCase(mockDatabase);
  });
  it('should return a client updated', async () => {
    const sut = new PutClientUseCase(mockDatabase);
  });
});
