import { join } from 'path'; //Ya viene con Node
import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    //Suele ir al inicio puesto que prepara las variables de entorno para su utilización
    //...permite leer las variables en nuestro env.config.ts
    //...y vamos a validar nuestras variables de entorno con respecto a nuestro validatosSchema que derfinimos
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],  //Hace mapeos y conversiones
      validationSchema: JoiValidationSchema,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),

    //Conexión a la BBDD basada en una variable de entorno
    MongooseModule.forRoot( process.env.MONGODB, {
      dbName: 'pokemonsdb'  //para darle un nombre a la base de datos. Podría estar en una variable de entorno
    } ),

    PokemonModule,

    CommonModule,

    SeedModule,

  ],
})

export class AppModule {

  //Para ver las variables de entorno que se están ejecutandop en la app de node
  //..una de las cuales sería la nuestra MONGODB
  /* constructor(){
    console.log( process.env );
    
  } */

}
