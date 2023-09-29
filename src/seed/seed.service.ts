import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  
 //Para crear de mnanera visual una dependencia con axios en mi servicio
 //...pero nos lo llevamos a un adaptador
  //private readonly axios: AxiosInstance = axios;
  
  constructor(
    @InjectModel( Pokemon.name )  //Pra poder inyectar modelos en este servicio
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter
  ){}
  
  //Forma 1: hace multiples inserciones
  /* async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const {data} = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');
    const insertPromisesArray = [];
    data.results.forEach(({ name, url }) => {
      //Para obtener el name y el id del pokemon (el id viene en la url)
      const segments = url.split('/');
      const no = +segments[ segments.length - 2 ]  // el + es para convertir el id en numérico
      //const pokemon = await this.pokemonModel.create({name, no});
      insertPromisesArray.push(
        this.pokemonModel.create({name, no})
      );
    });
    await Promise.all(insertPromisesArray);
    return 'Seed Executed';
  } */

  //Forma 2: Sólo hace 1 inserción, más óptima que la opción 1
  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    
    const pokemonToInserty: { name: string, no: number }[] = []; //posría crearse una interfaz

    data.results.forEach(({ name, url }) => {
      //Para obtener el name y el id del pokemon (el id viene en la url)
      const segments = url.split('/');
      const no = +segments[ segments.length - 2 ]  // el + es para convertir el id en numérico
      //const pokemon = await this.pokemonModel.create({name, no});
      pokemonToInserty.push({ name, no });
    });

    await this.pokemonModel.insertMany(pokemonToInserty);
    return 'Seed Executed';
  }
}
