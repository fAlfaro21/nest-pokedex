import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  
  //Para crear de mnanera visual una dependencia con axios en mi servicio
  private readonly axios: AxiosInstance = axios;


  async executeSeed() {

    const {data} = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');

    data.results.forEach(({ name, url }) => {

      //Para obtener el name y el id del pokemon (el id viene en la url)
      const segments = url.split('/');
      const no = +segments[ segments.length - 2 ]  // el + es para convertir el id en numérico

      console.log({ name, no });
      
    })

    return data.results;
  }

}
