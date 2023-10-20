import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AprendicesModule } from './aprendices/aprendices.module';

@Module({
  imports: [AprendicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
