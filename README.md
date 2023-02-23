# Kuepa-PruebaTecnica
pruebatecnica

1)-Para iniciar el proyecto es necesario hacer git un fork en su cuenta gitHub

2)-Luego del fork descargue el repositio en su computadora ya sea con git clone o descargando el archivo por .zip

3)- instale las dependencias dentro de las carpetas front y server utilizando el comando de NodeJs "npm install"
 (este procedimiento tiene que aplicarlo en cada una de las carpetas mencionadas. Ejemplo: desde su terminal ubicado en la carpeta
 front : C:\Users\SuUsuario\Kuepa-PruebaTecnica> npm install ).
 
 4)- Se debe de crear un cluster en MongoDB, luego de ello, tendremos que conectar el cluster con nuestra aplicacion. en nuestro cluster ya creado debemos de darle en conectar, donde nos dara un link similar a este (mongodb+srv://ronalldocorrea:<password>@cluster1.j9wudll.mongodb.net/?retryWrites=true&w=majority), este link lo pondremos en nestra carpeta server del proyecto, especificamente en el index.js linea 12-13, encontraremos una constante llamada url, alli remplazamos nuesto link, tambien tendremos que poner nuestra contraseña creada del cluster en la parte de <pasword> de nuestra url obtenida de de este mismo cluster.

const url = "URL obtenida del cluster y remplazamos <pasword> por nuestra contraseña";
 
5)- Luego de haber hecho esto encada una de las carpetas mencionadas, inicialice la carpeta server con el comando npm start 
y en seguida hágalo con la carpeta front, alli podra observar como se inicializa el proyecto de chat.


  

En esta primera instancia solo se logró realizar el Chat utilizado la librería Socked.io para intercomunicar a los usuarios en un mismo entorno de caht.
En la proxima version del proyecto se agregara el apartado de logeo con React y Redux , y agregando estos Usuarios a la BD MongoDB.


