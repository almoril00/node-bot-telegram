# Telegram Bot

_Sencillo Bot de Telegram con Javascript y Nodejs_

## Desarrollo 🚀
_Necesitaremos:_

* Node.js
* Telegram
* Telegraf

### ▶️ **Telegram**

Iniciar en Telegram conversación con *@BotFather* para solicitar la creación del bot

```
/newbot
```
Asignar nombre a nuestro bot (debe terminar en ...bot)

```
alm00testbot
```
Asignar usuario a nuestro bot (podemos poner el mismo nombre)

```
alm00testbot
```
Obtendremos respuesta con enlace y token de nuestro bot creado:

```
Done! Congratulations on your new bot. You will find it at t.me/alm00testbot.
...
Use this token to access the HTTP API:
1878775895:AAFB6ZIpKDcVVkd8BZsNTiJZHTe6fy*****
...
```

### ▶️ **Node.js** 
---

Crear archivo 'bot.js'

Crear archivo 'package.json' con npm
```
$ npm init -y
```

Instalar **Telegraf**

```
$ npm install telegraf --save
```
Instalar **nodemon** para ejecutar proyecto y reiniciar automáticamente cada vez que realizemos cambios.

Lo instalaremos la opción " -D " para no agregar en _dependencies_ de 'package.json' y si en _devDependencies_
```
$ npm i nodemon -D
```
Crear script _dev_ en 'package.json' para ejecutar la app :
```
  "scripts": {
        "dev": "nodemon bot.js"
    },
```

Ejecutar script _dev_ :
```
$ npm run dev
````

Probar en Telegram.



## Construido con 🛠️

_Herramientas utilizadas y enlaces de interes:_

* [Telegraf](https://telegraf.js.org/) - Modern Telegram Bot Framework for Node.js.
* [Telegram Bot API](https://core.telegram.org/bots/api) - API Telegram
* [Telegram Samples](https://core.telegram.org/bots/samples) - Librerías (ejemplos)
* [npm](https://www.npmjs.com/) - Node Package Manager


---
por [almoril00](https://github.com/almoril00) 😊
