# Word Finder Back-End

Word finder front-end use to find every possible combination of words from dictionary provided that the random words.


### Technology used

The list of technology used by this project is as follows:

* [Express] - Popular web framework to build web apps
* [NodeJs] - Javascript Language for bulidig backend driven application
* [Swagger] - API framework for building beautifull documentation
* [Eslint ] - For best code practice 
* [Docker] - For best developement and deployement experience
* [Babel] - Compile latest Javascript to browser supported Javascript


### Installation
##### There are two ways of runnig this application.

1. Using Docker (recommended)
```sh
$ git clone https://github.com/pkandel/backend
$ cd backend
$ docker build -t backend .
$ docker run -p 8080:80 backend
```
This runs your app at http://localhost:8080 in production environment.
You can access your Swagger API documentaion at http://localhost:8080/api-docs

Or you can simply run from docker image from the docker-hub
```sh
$ docker run -d -p 8080:80 pkandel/backend
```

2. Using npm

In development mode
```sh
$ git clone https://githun.com/pkandel/backend
$ cd backend; npm install
$ npm run dev
`````
```make sure port 80 is avvaiable if not change npm run dev to PORT=8080 npm run dev```

In production mode
```sh
$ git clone https://github.com/pkandel/backend
$ cd backend; npm install
$ npm run build
$ npm run prod
```
```make sure port 80 is avvaiable if not change npm run prod to PORT=8080 npm run prod```

NOTE

The dictionary that is used in this application can be accessed by http://localhost:8080/words.txt

License
----

MIT

   [NodeJs]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [Swagger]: <https://swagger.io/>
   [Eslint]: <https://eslint.org/>
   [Docker]: <https://docker.com>
   [Babel]: <https://babeljs.io>

