import { Controller, Get, Query } from '@nestjs/common';
import { PingService } from './ping.service';

@Controller('ping')
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get()
  async ping(@Query('host') host: string): Promise<any> {
    if (!host) {
      return { message: 'Please provide a host to ping.' };
    }
    return this.pingService.pingHost(host);
  }
}