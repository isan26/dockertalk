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
