import { Controller, Body, Get, Post, Put, Patch, Param } from '@nestjs/common';
import { ClientCreateDto } from '../../shared/dtos/client.create.dto';
import {
  CreateClientUseCase,
  GetAllClientUseCase,
  GetByIdClientUseCase,
  PatchClientUseCase,
  PutClientUseCase,
} from '../../use-cases';
import { ClientPrismaRepository } from '../../data/remote/client-prisma-repository';

@Controller('/api/client')
export class ClientController {
  private readonly db = new ClientPrismaRepository();
  private readonly getAll = new GetAllClientUseCase(this.db);
  private readonly create = new CreateClientUseCase(this.db);
  private readonly getById = new GetByIdClientUseCase(this.db);
  private readonly patch = new PatchClientUseCase(this.db);
  private readonly put = new PutClientUseCase(this.db);
  // constructor(
  //   getAll: GetAllClientUseCase,
  //   create: CreateClientUseCase,
  //   getById: GetByIdClientUseCase,
  //   patch: PatchClientUseCase,
  //   put: PutClientUseCase,
  // ) {}

  @Post()
  public async createClient(@Body() client: ClientCreateDto) {
    return await this.create.execute(client);
  }

  @Patch(':id')
  public async editClient(
    @Param() id: number,
    @Body() client: Partial<ClientCreateDto>,
  ) {
    return await this.patch.execute(id, client);
  }

  @Get(':id')
  public async getClient(@Param() id: number) {
    return await this.getById.execute(id);
  }

  @Get()
  public async getAllClients() {
    return await this.getAll.execute();
  }
}
