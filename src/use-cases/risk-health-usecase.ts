import { ClientRepository } from '../core/repositories/client.repository';
import { ClientCreateMapper } from '../core/domain/mappers/client-create.mapper';
import { IRisk } from '../shared/dtos/risk.client.dto';
import { IUseCase } from 'src/core/base/use-case';
import { Respository } from 'src/core/base/repository';
import { ClientEntity } from 'src/core/domain/entities/client.entitie';

export class RiskClientUseCase implements IUseCase<IRisk[]> {
  private mapper: ClientCreateMapper;
  private clientRepository: ClientRepository;
  constructor(database: Respository<ClientEntity>) {
    this.mapper = new ClientCreateMapper();
    this.clientRepository = new ClientRepository(database);
  }

  public async execute() {
    const risk = await this.handle();
    const sorted = risk.sort((a, b) => {
      if (a.totalRisk > b.totalRisk) {
        return -1;
      }
      if (a.totalRisk < b.totalRisk) {
        return 1;
      }

      return 0;
    });

    return sorted;
  }

  private async handle() {
    const client = await this.clientRepository.getAll();
    const data = client.map((cli) => this.mapper.mapToUser(cli));
    const risk = data.map(({ id, name, healthIssues }) => {
      const sum = healthIssues
        .map(({ classification }) => classification)
        .reduce((acc, curr) => acc + curr, 0);

      const score = ((1 / (1 + 2.71828 - (-2.8 + sum))) * 100).toFixed(2);

      return { id, name, totalRisk: Number(score) };
    });

    return risk;
  }
}
