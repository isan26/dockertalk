Que es docker,
-> Introduccion formal
-> Introduccion terrenal construyendo sobre la formal
-> Explicar que son las imagenes y los contenedores,

Para que me sirve Docker
-> Como desarrollador, por que necesito Docker, que le puedo sacar a priori
-> Infraestructura como codigo.

Explicar otros conceptos
- Volumenes
- Docker File


Comandos basicos
- pull
- ps
- run
- image
- rmi
- volume
- container
- rm
- inspect
- build
- restart/stop containers


docker-compose
- Platicar sobre compose y como poder utilizar varios "grupos" de contenedores


Caso de uso concreto
 - como desarrollador
 - Infraestructura empresarial (con Docker composer)

Ejemplo practico, 
-> Instalar mongodb
-> Portainer



Que es Docker?
Segun wikipedia es 
Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos. etc...
Normalmente estas definiciones son muy tecnicas y complicadas de entender, por ende tambien intimidantes, cuando en realidad Docker es muy simple.

Basicamente necesitamos 2 conceptos que a mi parecer es lo mínimo para entender Docker.
1- Contenedores
2- Imagenes

Los contendores:
Viene siendo similiar a maquinas virtuales muy pequeñas y que utilizan un minimo de recursos por tanto es muy practico tener varias corriendo al mismo tiempo.

Imagenes:
Son las "plantillas" de los contenedores, es decir, a partir de "correr" estas imagenes es que se generan los contenedores.

Docker nos va a proporcionar la posibilidad de gestionar las imagenes y contenedores, con lo cual podremos controlar cuantos contenedores vamos a tener corriendo en determinado momento, administrar nuestras imagenes e incluso hacer imagenes basandonos en otras imagenes.

El ejemplo más facil que se me ocurre es el de clases y objetos, donde un objeto es una clase instanciada, en este caso los contenedores son los objetos y las imagenes las clases.

Por supuesto hay más conceptos dentro de Docker, de hecho hay multiples recursos y funcionalidades que nos permiten resolver distintos casos, pero todo gira entorno a estos dos simples conceptos, imagenes y volumenes.





Todo muy bien, muy simple, pero
Para que necesito esto? A mi como desarrollador para que me sirve Docker.

1- Para asegurar que mi código va a funcionar en cualquier otro lugar y no solo en mi computadora.
Al crear una imagen con todo lo que necesita el proyecto para correr, es extremandamente practico a la hora de instalar y ejecutar un proyecto, porque ya no estamos expuestos a los cambios en los ambientes, a que si debo tener una version especifica de X o Y librería. Por ende a priori elimina el funciona en mi PC.


2- Instalar y probar software.
 Existen muchas imagenes listas para ser descargadas y utilizadas en repositorios de imagenes como docker hub, por ejemplo si necesitamos levantar un servidor de MySQL, o mongoDB o redis o practicamente cualquier servicio que necesitemos es muy probable que ya exista la imagen lista para ser descargada y utilizada, la gran ventaja de esto es que requiere un minimo para empezar y lo segundo es que nos podemos deshacer de dicha imagen y contenedores cuando no lo necesitemos. Lo mismo aplica cuando necesitamos distintas versiones de una misma tecnología, simplemente descargarnos la imagene de la versión especifica, correrla y listo.



Y en mi organización, cuales son las aplicaciones?

Normalmente cuando desarrollamos productos, no se quedan simplemente en la computadora de los desarrolladores, por el contrario debe correr en un ambiente de pruebas y otro de producción.
Por cuestiones prácticas sabemos que es preferible tener estos ambientes separados y una alternativa es tener 2 servidores, aunque esta solución esta bien, nos crea la responsabilidad de administrar y probablemente pagar 2 servidores, ahora con Docker y más especificamente con una herramienta del propio Docker llamada Docker compose, se pueden crear estos ambientes por separado en el mismo servidor de modo que uno no interfiera con el otro.

Por otra parte, esto abre la puerta a poder configurar nuestra infraestructura en ficheros de texto, quiza les suene el término IaC (Infraestructure as Code), que no es más que especificar que servicios necesito corriendo en ficheros de texto los cuales puedo correr en otros servidores para replicar mi ambiente en lugar de estar instalando todos y cada uno de los servicios. De esta manera, entregar trabajo al cliente es mucho más sencillo y menos proclive a errores de configuración. Tambien hace que migrar de proveedor no sea una tarea digna de mucha valentía, sino por el contrario una opción viable en todo momento.


Explicar otros conceptos
- Volumenes : Son un mecanismo para persistir datos, los contenedores cuando son detenidos no retienen su estado y utilizando los contenedores podemos hacer que estos datos persistan. Por ejemplo, cualquier sistema de base de datos debe ser capaz de persistir sus datos cuando se detiene el servicio. Los volumenes permiten almacenar partes del sistema de archivos del contenedor de manera externa.

- Dockerfile: Es un fichero de texto que contiene instrucciones para crear una imagen.

- Docker Hub : El Repositorio oficial de imagenes de Docker.


Comandos:
pull : Descarga imagen de docker hub
> docker pull nginx

run : Corre una imagen
 docker run nginx
 
image : utilidad para gestionar imagenes
	ls -> Lista las imagenes instaladas
	build -> Construye imagen a partir de un Dockerfile
	prune -> Elimina imagenes no utilizadas
	pull -> Descarga imagen de docker hub
	rm -> Elimina una imagen
	inspect -> Muestra información sobre la imagen
	
	
> docker image ls
> docker image prune
> docker image rm nginx

container: Utilidad para gestionar contenedores
	ls -> Lista los contenedores
	prune -> Elimina los contendores que no esta corriendo
	rm -> Eliminar contenedores
	restart -> Reinicia contenedores
	stop -> Detiene un contenedor
	start -> Inicia un contenedor

> docker container ls
> docker container prune
> docker container stop nombredelcontenedor


 
volume : Utilidad para gestionar volumenes
	create -> Crea un nuevo volumen
	inspect -> Muestra información sobre los volumenes
	ls -> Lista los volumenes
	prune -> Elimina volumenes no utilizados
	rm -> Elimina volumenes
	
> docker volume ls
> docker volume prune
> docker volume create mysql-volume
> docker volume rm mysql-volume

Caso en concreto
- Instalar docker y correr portainer por ejemplo que es muy visual.
- Crear un .Docker file para demostrar IaC





