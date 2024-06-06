import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

type ILocation = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

@Injectable()
export class CityService {
  constructor(private readonly configService: ConfigService) {}

  async getCityByCep(cep: string): Promise<string> {
    if (cep.length != 8) {
      throw new BadRequestException('Validation error!', {
        cause: new Error(),
        description: 'O CEP precisa ter 8 dígitos!',
      });
    }

    try {
      const urlViacep = this.configService.get<string>('API_VIACEP');
      const response = await axios.get(`${urlViacep}/${cep}/json`);
      const location = response.data as ILocation;

      return location.localidade;
    } catch (error) {
      throw new BadRequestException('Request error!', {
        cause: new Error(),
        description: 'Erro ao consultar o CEP na ViaCep',
      });
    }
  }
}
