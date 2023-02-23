import { Module } from '@nestjs/common';
import {
  CreateClientUseCase,
  GetAllClientUseCase,
  GetByIdClientUseCase,
  PatchClientUseCase,
  PutClientUseCase,
  RiskClientUseCase,
} from './use-cases';
import { ClientController } from './presentation/ClientController/client-controller';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [
    CreateClientUseCase,
    GetAllClientUseCase,
    GetByIdClientUseCase,
    PatchClientUseCase,
    PutClientUseCase,
    RiskClientUseCase,
  ],
})
export class AppModule {}
