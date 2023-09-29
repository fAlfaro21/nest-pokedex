import * as Joi from 'joi';

//Creamos el siguiente validation shcema para tener las propiedades/objeto de la manera que yo espero
export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),    //Sin no viene el MONGODB, va a lanzar un error
    PORT: Joi.number().default(3005),   //Si no me facilitan el puerto, por defecto se uas 3005
    DEFAULT_LIMIT: Joi.number().default(6),

    //Puedo seguir agregando más validaciones.....
})