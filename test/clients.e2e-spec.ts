import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const clients = [
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
    name: 'Guilherme Oliveira',
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
];

const client = {
  id: 3,
  name: 'Guilherme Oliveira',
  birthdate: '21/03/1999',
  sex: 'male',
  healthIssues: [
    {
      name: 'Pressão Alta',
      classification: 1,
    },
    {
      name: 'Hipertensão',
      classification: 2,
    },
    {
      name: 'Diabetes',
      classification: 2,
    },
  ],
};

const getAllResponse = [
  {
    id: 1,
    name: 'maria',
    birthdate: '22/10/2008',
    sex: 'female',
    healthIssues: [
      {
        name: 'tristeza',
        classification: 0,
      },
    ],
  },
  {
    id: 2,
    name: 'Joao',
    birthdate: '20/05/2002',
    sex: 'male',
    healthIssues: [
      {
        name: 'hipertensão',
        classification: 1,
      },
    ],
  },
  {
    id: 3,
    name: 'Guilherme Oliveira',
    birthdate: '21/03/1999',
    sex: 'male',
    healthIssues: [
      {
        name: 'Pressão Alta',
        classification: 1,
      },
      {
        name: 'Hipertensão',
        classification: 2,
      },
      {
        name: 'Diabetes',
        classification: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'Joana',
    birthdate: '02/06/1976',
    sex: 'female',
    healthIssues: [
      {
        name: 'Pressão Baixa',
        classification: 2,
      },
      {
        name: 'Diabetes',
        classification: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'Gabriele',
    birthdate: '17/12/2003',
    sex: 'female',
    healthIssues: [
      {
        name: 'Cardiovascular',
        classification: 2,
      },
      {
        name: 'Cancer de Pele',
        classification: 2,
      },
      {
        name: 'Salmonela',
        classification: 1,
      },
      {
        name: 'Diabete',
        classification: 2,
      },
    ],
  },
  {
    id: 6,
    name: 'henrique',
    birthdate: '17/05/2004',
    sex: 'male',
    healthIssues: [
      {
        name: 'depressão',
        classification: 2,
      },
    ],
  },
  {
    id: 7,
    name: 'Jaqueline',
    birthdate: '17/05/2004',
    sex: 'Female',
    healthIssues: [
      {
        name: 'Hipertensão Arterial',
        classification: 2,
      },
      {
        name: 'Asma',
        classification: 1,
      },
      {
        name: 'Rinite',
        classification: 1,
      },
    ],
  },
  {
    id: 8,
    name: 'Samuel',
    birthdate: '10/08/2000',
    sex: 'male',
    healthIssues: [
      {
        name: 'Insônia',
        classification: 1,
      },
      {
        name: 'Asma',
        classification: 1,
      },
      {
        name: 'Rinite',
        classification: 1,
      },
    ],
  },
  {
    id: 9,
    name: 'Felipe',
    birthdate: '11/11/1993',
    sex: 'male',
    healthIssues: [
      {
        name: 'Problema de Visão',
        classification: 1,
      },
      {
        name: 'Diabete',
        classification: 2,
      },
    ],
  },
  {
    id: 10,
    name: 'Sabrina',
    birthdate: '10/01/1990',
    sex: 'Female',
    healthIssues: [
      {
        name: 'Problema de Visão',
        classification: 1,
      },
      {
        name: 'Diabete',
        classification: 2,
      },
      {
        name: 'Rinite',
        classification: 1,
      },
      {
        name: 'Obesidade',
        classification: 2,
      },
      {
        name: 'Asma',
        classification: 1,
      },
    ],
  },
  {
    id: 11,
    name: 'Rafaell',
    birthdate: '08/10/2006',
    sex: 'Male',
    healthIssues: [
      {
        name: 'Problema de Visão',
        classification: 1,
      },
    ],
  },
  {
    id: 12,
    name: 'Guilherme',
    birthdate: '18/05/2005',
    sex: 'Male',
    healthIssues: [
      {
        name: 'Obesidade',
        classification: 2,
      },
      {
        name: 'Diabete',
        classification: 2,
      },
    ],
  },
  {
    id: 13,
    name: 'Lucas',
    birthdate: '12/12/2004',
    sex: 'Male',
    healthIssues: [
      {
        name: 'Hipertensão',
        classification: 2,
      },
      {
        name: 'Diabete',
        classification: 2,
      },
      {
        name: 'Asma',
        classification: 1,
      },
      {
        name: 'Enxaqueca',
        classification: 1,
      },
      {
        name: 'Tireóide',
        classification: 1,
      },
    ],
  },
  {
    id: 14,
    name: 'Gertrudes',
    birthdate: '02/04/1964',
    sex: 'Female',
    healthIssues: [
      {
        name: 'Pressão Alta',
        classification: 1,
      },
      {
        name: 'Hipertensão',
        classification: 2,
      },
      {
        name: 'Diabetes',
        classification: 2,
      },
      {
        name: 'Tireóide',
        classification: 1,
      },
      {
        name: 'Insônia',
        classification: 1,
      },
    ],
  },
  {
    id: 15,
    name: 'Genivaldo',
    birthdate: '20/06/1960',
    sex: 'male',
    healthIssues: [
      {
        name: 'Pressão Alta',
        classification: 1,
      },
      {
        name: 'Hipertensão',
        classification: 2,
      },
      {
        name: 'Diabetes',
        classification: 2,
      },
      {
        name: 'Tireóide',
        classification: 1,
      },
      {
        name: 'Insônia',
        classification: 1,
      },
      {
        name: 'Úlcera',
        classification: 2,
      },
      {
        name: 'Artrose',
        classification: 2,
      },
    ],
  },
];

describe('Client Controller', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/client (GET) - Should return all clients', async () => {
    const req = await request(app.getHttpServer()).get('/api/client');
    expect(req.status).toBe(200);
    expect(req.body).toEqual(getAllResponse);
  });

  it('/api/client/3 (GET) - Should return one client', async () => {
    const req = await request(app.getHttpServer()).get('/api/client/3');
    expect(req.status).toBe(200);
    expect(req.body).toEqual(client);
  });

  it('/api/client/risk (GET) - Should return 10 clients with bigger health risk', async () => {
    const req = await request(app.getHttpServer()).get('/api/client/risk');
    expect(req.status).toBe(200);
    expect(req.body).toEqual(clients);
  });
});
