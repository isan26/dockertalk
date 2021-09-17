# Ejemplo #2

Crear una imagen de docker a partir de un dockerfile, correrla y compartirla en docker hub.


## App
La aplicación es un ejemplo simple de nodejs basado en el [artículo](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) de la página oficial de nodejs


Es una aplicación simple de node, la cual va a mostrar un mensaje en el navegador y a crear logs cuando algun usuario acceda.

Para probar, abrir la carpeta app, luego simplemente correr
> npm start

 y visitar http://localhost:8080


## Crear imagen de docker

Para este ejemplo vamos a necesitar 2 ficheros.
 - Dockerfile: Contiene las especificaciones para construir la imagen
 - .dockerignore: similar a .gitignore, permite excluir carpetas y ficheros

### Dockerfile
    
    # imagen base sobre la que construir
    # en este caso es la imagen oficial de nodejs
    FROM node


    # Especifica una carpeta sobre la cual se trabajara dentro del contenedor
    # con esta directiva se crea la carpeta /app y se elige para trabajar en ella.
    WORKDIR /app


    # Copia el contenido de la carpeta local ./app que es donde esta la aplicación
    # a la carpeta de trabajo que fue declarada en el paso anterior, es decir /app
    COPY ./app .

    # Corre la instalacion de los paquetes necesarios por la aplicación
    RUN npm install

    # Le informa a docker que la apliación escucha por el puerto declarado.
    EXPOSE 8080

    # Finalmente corre la aplicación
    CMD [ "npm", "start" ]


### .dockerignore

    # Excluir node_modules de la imagen
    node_modules

## Correr y probar la imagen
 Teniendo el dockerfile y .dockerignore basta con ejecutar construir y luego correr la imagen

Construir:
 > docker build -t isan1989/dockertalk .

Correr la imagen
>  docker run -d --rm -p 8080:8080 --name dockertalk-app isan1989/dockertalk

- -d: detached, para que devuelva la consola
- -rm : Elimina el contenedor al detenerse.
- -p 8080:8080 : Bind ports, expone el puerto 8080 del contenedor por el 8080 del host
- --name dockertalk-app: Nombre que va a tener el contenedor
- isan1989/dockertalk : Imagen a correr.


### Probando...
El siguiente comando va a mostrar stdout del contenedor, en este caso el resultado de las llamadas del console.log dentro de la aplicación.

> docker logs -f dockertalk-app

En el navegador ir a http://localhost:8080 se mostrará el texto de ejemplo que demuestra que esta corriendo la aplicación.



## Publicar a docker hub

- Ir a https://hub.docker.com/ y logearse
- Crear un repository, en este caso ya esta creado el repositorio dockertalk bajo mi cuenta de usuario. Por tanto el nombre de la imagen a subir debe ser el mismo que el repositorio, por eso es que en los pasos anteriores la imagen tenía el nombre de mi usuario y de el repositorio.
 
- docker login -u isan1989
- docker build -t isan1989/dockertalk .
- docker push isan1989/dockertalk
  

### Link del repositorio

https://hub.docker.com/repository/docker/isan1989/dockertalk