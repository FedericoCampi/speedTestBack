import { Controller, Get } from '@nestjs/common';
import { SpeedtestService } from './speedtest.service';

@Controller('speedtest')
export class SpeedtestController {
  constructor(private readonly speedtestService: SpeedtestService) {}

  @Get()
  async testInternetSpeed() {
    return this.speedtestService.getInternetSpeed();
  }
}