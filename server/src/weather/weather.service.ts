import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { IWeather } from './iweather';

@Injectable()
export class WeatherService {
  constructor(private readonly configService: ConfigService) {}

  async getWeatherOfCity(city: string): Promise<IWeather> {
    if (!city) {
      throw new BadRequestException('Validation error!', {
        cause: new Error(),
        description: 'Uma cidade precisa ser informada!',
      });
    }

    try {
      const urlWeatherstack =
        this.configService.get<string>('API_WEATHERSTACK');
      const keyWeatherstack =
        this.configService.get<string>('KEY_WEATHERSTACK');
      const params = {
        access_key: keyWeatherstack,
        query: city,
      };

      const response = await axios.get(`${urlWeatherstack}`, { params });
      const { location, current } = response.data;

      return { ...location, ...current } as IWeather;
    } catch (error) {
      throw new BadRequestException('Request error!', {
        cause: new Error(),
        description: 'Erro ao consultar o clima no Weatherstack!',
      });
    }
  }
}
