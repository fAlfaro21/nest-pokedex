import { IsInt, IsString, IsPositive, MinLength } from 'class-validator';

export class CreatePokemonDto {

@IsInt()
@IsPositive()
no: number;

@IsString()
@MinLength(1)
name: string;

}
