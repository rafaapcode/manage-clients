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

const makeSut = () => {
  const createClient = new CreateClientUseCase(mockDatabase);
  const getAllClient = new GetAllClientUseCase(mockDatabase);
  const getClientById = new GetByIdClientUseCase(mockDatabase);
  const patchClient = new PatchClientUseCase(mockDatabase);
  const updateAllclient = new PutClientUseCase(mockDatabase);

  return {
    createClient,
    getAllClient,
    getClientById,
    patchClient,
    updateAllclient,
  };
};

let request = {
  name: 'Joao',
  birthdate: '01/02/2000',
  sex: 'male',
  healthIssues: [{ name: 'diabetes', classification: 1 }],
};

describe('Client use cases', () => {
  beforeAll(() => {
    mockDatabase.allDb = [];
  });

  it('should create a new client', async () => {
    const { createClient } = makeSut();
    const client = await createClient.execute(request);
    expect(client).toBeTruthy();
    expect(mockDatabase.allDb.length).toEqual(1);
  });

  it('should return all clients', async () => {
    const { getAllClient } = makeSut();
    const allClient = await getAllClient.execute();
    expect(allClient[0].name).toBe('Joao');
    expect(allClient).toEqual(expect.arrayContaining([expect.any(Object)]));
  });

  it('should return a client by id', async () => {
    const { getClientById } = makeSut();
    const client = await getClientById.execute(1);
    expect(client.name).toBe('Joao');
  });

  it('should return a client with the field updated', async () => {
    const { patchClient } = makeSut();
    const client = await patchClient.execute(1, { birthdate: '26/09/1997' });
    expect(client.birthdate).toBe('26/09/1997');
  });

  it('should return a client updated', async () => {
    const { updateAllclient } = makeSut();
    request = {
      name: 'Gabriel Nunes',
      birthdate: '20/12/2015',
      sex: 'male',
      healthIssues: [{ name: 'Preguiça', classification: 2 }],
    };
    const client = await updateAllclient.execute(1, request);
    expect(client).toEqual(request);
  });
});
