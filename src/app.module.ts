import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpeedtestModule } from './speedtest/speedtest.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [SpeedtestModule, PingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
