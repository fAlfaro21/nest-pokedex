//Archivo de configuración de las variables de entorno
//También llamado app.config.ts

//Con esta función vamos a mapear nuestras variables de entorno

export const EnvConfiguration = () => ({
    //Definimos una variable de entorno que puede tomar un valor u otro
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7,  //recordar que los valores por defecto de las variables de entorno se guardan como  strings, por eso lo transormamos a número con el +
})