import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { IWeather } from './iweather';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/weather/:city')
  async getWeatherOfCity(@Param('city') city: string): Promise<IWeather> {
    return await this.weatherService.getWeatherOfCity(city);
  }
}
