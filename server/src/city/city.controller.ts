import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';

@Controller()
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/city/:cep')
  async getCityByCep(@Param('cep') cep: string): Promise<string> {
    return await this.cityService.getCityByCep(cep);
  }
}
