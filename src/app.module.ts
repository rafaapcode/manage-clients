import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServiceService } from './service/service/service.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ServiceService],
})
export class AppModule {}
