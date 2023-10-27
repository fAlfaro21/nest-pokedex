<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Resumen

CRUD en base de datos, Validaciones, Docker y Docker Compose, Conectar contenedor con filesystem (para mantener la data de la base de datos), Schemas, Modelos, DTOs y sus extensiones.

Uso de modelos en diferentes módulos, SEED para llenar la base de datos, Paginación de resultados, DTOs para Query parameters, Transformaciones de DTOs.

Variables de entorno y su validación, Dockerizacion, Mongo Atlas, Env file, Validation Schemas, Configuration Module, Dockerfile.

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar la copia a´´´.env´´´
6. Llenar las variables de entorno definidas en el ´´´.env```
7. Ejecutar la aplicación en dev (en modo observación)
```
yarn start:dev
```
8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

# Stack utilizado
* MongoDB
* Nest

# Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```