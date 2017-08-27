import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import config from './config';
import routes from '../routes';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import cors from 'cors';

const app = express();

//parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../../public")));
app.use(cors());

// swagger definition
var swaggerDefinition = {
    info: {
        title: 'Word Finder',
        version: '1.0.0',
        description: 'This is used to find word provided that the random input of words',
    },
    host: 'localhost:8080',
    basePath: '/',
};

// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./src/routes/*.js']
};
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

if (config.env === 'development') {
    app.use(logger('dev'));
}
//mount all routes on /api path
app.use('/', routes);

// serve swagger
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.listen(config.port, () => {
    console.log(`server started on port ${config.port} (${config.env})`);
});
export default app;