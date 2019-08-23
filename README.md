
# EASYEAT FRONT

EASYEAT es una aplicacion para restaurantes basada en preorden, y en el momento de la compra de una manera dinamica y activa para cliente y vendedor

## Getting Started

> Link de el proyecto EC2 EN AWS <Aqui va link del FRONT DESPLEGADO EN EC2>
### Prerequisitos

Para correr el front del proyecto necesitaremos lo siguiente

```
1) npm 
2) JavaScript
3) Maquina virtual de AWS en EC2
```

### Installing

Pasos para correr el programa

Para correr el front se deberan seguir los siguientes pasos:

```
1) Verificar que la instancia en AWS EC2 este corriendo 
2) Generar la llave pem que proporciona EC2 para la conexion remota en el servidor dado por AWS para ello copie cerca la llave el path de su proyecto.
3) Luego de ello subira el proyecto.
4) Por medio del protocolo sftp pase el archivo directamente desde su maquina a el server de AWS de la siguiente manera.
```
> sftp -i "elChurruscoDeShopFiles.pem" ec2-user@ec2-18-222-218-46.us-east-2.compute.amazonaws.com
```
5) Luego de ello agregar el archivo generado por el npm al programa de la siguiente forma
```
> put nombre_de_la_carpeta
```
6) Por ultimo conectese al servidor de EC2 de la siguiente manera
```
> ssh -i "elChurruscoDeShopFiles.pem" ec2-user@ec2-18-222-218-46.us-east-2.compute.amazonaws.com
```
7) Como ultimo paso correr el servicio para correrlo aplicaremos el siguiete comando
```
> sudo npm start (Para usar este comando debe estar dentro de la carpeta)




## Deployment

Para el despliegue del sistema front como se explico anteriormente aplicar el siguiente comando:
> sudo npm start
> Para matar los procesos si se queda colgado hacer lo siguiente
 * ps -ef | grep npm -> Esto le muestra los procesos corriendo para npm
 * sudo kill "# del proceso" -> Con esto mata el proceso, con el numero asociado
 

## Built With

* [npm](https://www.npmjs.com/) - Administrador de dependencias de Node
* [AWS](https://aws.amazon.com/) - Plataforma de Arquitectura y Despliegue


## Contributing

Por favor leer [Contribuidores](https://github.com/easyeat/EASYEAT-FRONT/graphs/contributors) para detalle de commits.


## Authors

* **Andres Florez** - *Develop* - (https://github.com/andresflorezp)
* **Nicolas Nontoa** - *Develop* - (https://github.com/nontoa)
* **Sebastian Goenaga** - *Develop* - (https://github.com/SebastianGoenaga)
* **Javier Vargas** - *Develop* - (https://github.com/javargas1098)
* **Fabian Bohorquez** - *Develop* - (https://github.com/heredikon)
* **Cesar Lanos** - *Develop* - ()

 Ver la lista de contribuidores de este proyecto [Contribuidores](https://github.com/easyeat/EASYEAT-FRONT/graphs/contributors) 

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/https://github.com/easyeat/EASYEAT-FRONT/blob/master/LICENSE) file for details

