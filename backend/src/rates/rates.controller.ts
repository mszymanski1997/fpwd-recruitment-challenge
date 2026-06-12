import { Controller, Get } from '@nestjs/common';
import { RatesService } from './rates.service';

@Controller('rates')
export class RatesController {
  constructor(private ratesService: RatesService) {}

  @Get()
  getNewRate() {
    return this.ratesService.getRate();
  }
}
