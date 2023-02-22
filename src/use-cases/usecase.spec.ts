import { describe, it } from 'node:test';
import {
  CreateClientUseCase,
  GetAllClientUseCase,
  GetByIdClientUseCase,
  PatchClientUseCase,
  PutClientUseCase,
  RiskClientUseCase,
} from './index';
import { DatabaseInMemory } from '../data/memory/DatabaseInMemory';

const mockDatabase = new DatabaseInMemory();

const makeSut = () => {
  const createClient = new CreateClientUseCase(mockDatabase);
  const getAllClient = new GetAllClientUseCase(mockDatabase);
  const getClientById = new GetByIdClientUseCase(mockDatabase);
  const patchClient = new PatchClientUseCase(mockDatabase);
  const updateAllclient = new PutClientUseCase(mockDatabase);
  const riskClients = new RiskClientUseCase(mockDatabase);

  return {
    createClient,
    getAllClient,
    getClientById,
    patchClient,
    updateAllclient,
    riskClients,
  };
};

let request = {
  name: 'Joao',
  birthdate: '01/02/2000',
  sex: 'male',
  healthIssues: [{ name: 'diabetes', classification: 1 }],
};

const mockClients = [
  {
    id: 5,
    name: 'Gabriele',
    totalRisk: 207.59,
  },
  {
    id: 10,
    name: 'Sabrina',
    totalRisk: 207.59,
  },
  {
    id: 13,
    name: 'Lucas',
    totalRisk: 207.59,
  },
  {
    id: 14,
    name: 'Gertrudes',
    totalRisk: 207.59,
  },
  {
    id: 3,
    name: 'Guilherme Correa',
    totalRisk: 65.86,
  },
  {
    id: 4,
    name: 'Joana',
    totalRisk: 39.71,
  },
  {
    id: 7,
    name: 'Jaqueline',
    totalRisk: 39.71,
  },
  {
    id: 12,
    name: 'Guilherme',
    totalRisk: 39.71,
  },
  {
    id: 8,
    name: 'Samuel',
    totalRisk: 28.42,
  },
  {
    id: 9,
    name: 'Felipe',
    totalRisk: 28.42,
  },
  {
    id: 15,
    name: 'Guilherme',
    totalRisk: 40.55,
  },
  {
    id: 18,
    name: 'Samuel',
    totalRisk: 78.42,
  },
  {
    id: 29,
    name: 'Felipe',
    totalRisk: 18.42,
  },
];

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

  it('should return the 10 clients with more health risk', async () => {
    const { riskClients } = makeSut();
    jest.spyOn(riskClients, 'execute').mockImplementationOnce(async () => {
      return mockClients
        .sort((a, b) => a.totalRisk + b.totalRisk)
        .splice(0, 10);
    });
    mockDatabase.allDb = mockClients;
    const client = await riskClients.execute();
    expect(client.length).toBe(10);
    expect(client[0].id).toBe(5);
    expect(client[1].id).toBe(10);
  });
});
