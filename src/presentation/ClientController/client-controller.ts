import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientCreateDto } from '../../shared/dtos/client.create.dto';
import {
  CreateClientUseCase,
  GetAllClientUseCase,
  GetByIdClientUseCase,
  PatchClientUseCase,
  PutClientUseCase,
  RiskClientUseCase,
} from '../../use-cases';
import { ClientPrismaRepository } from '../../data/remote/client-prisma-repository';
import { ClientRequest, ClientPatchRequest } from './validation-request';

@Controller('/api/client')
export class ClientController {
  private readonly db = new ClientPrismaRepository();
  private readonly getAll = new GetAllClientUseCase(this.db);
  private readonly create = new CreateClientUseCase(this.db);
  private readonly getById = new GetByIdClientUseCase(this.db);
  private readonly patch = new PatchClientUseCase(this.db);
  private readonly put = new PutClientUseCase(this.db);
  private readonly calcRisk = new RiskClientUseCase(this.db);

  @Get('/risk')
  public async riskClients() {
    return await this.calcRisk.execute();
  }

  @Patch('update/:id')
  public async editClient(
    @Param('id', ParseIntPipe) id: number,
    @Body() client: ClientPatchRequest,
  ) {
    return await this.patch.execute(id, client);
  }

  @Put(':id')
  public async updateClient(
    @Param('id', ParseIntPipe) id: number,
    @Body() client: ClientRequest,
  ) {
    return await this.put.execute(id, client);
  }

  @Get(':id')
  public async getClient(@Param('id', ParseIntPipe) id: number) {
    return await this.getById.execute(id);
  }

  @Post()
  public async createClient(@Body() client: ClientRequest) {
    return await this.create.execute(client);
  }

  @Get()
  public async getAllClients() {
    return await this.getAll.execute();
  }
}
