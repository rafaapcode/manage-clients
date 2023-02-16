import { Controller, Body, Get, Post, Put, Patch, Param } from '@nestjs/common';
import { ClientCreateDto } from '../../shared/dtos/client.create.dto';
import {
  CreateClientUseCase,
  GetAllClientUseCase,
  GetByIdClientUseCase,
  PatchClientUseCase,
  PutClientUseCase,
} from '../../use-cases';

@Controller('/api/client')
export class ClientController {
  constructor(
    private readonly getAll: GetAllClientUseCase,
    private readonly create: CreateClientUseCase,
    private readonly getById: GetByIdClientUseCase,
    private readonly patch: PatchClientUseCase,
    private readonly put: PutClientUseCase,
  ) {}

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
