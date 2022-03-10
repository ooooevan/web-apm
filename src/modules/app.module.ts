import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { NestLogsModule } from 'nest-logs';

@Module({
  imports: [NestLogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
