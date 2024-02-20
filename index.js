const express = require('express');
const { dbConnection } = require('./config/config');
const app = express();
const SawggerUi = requre('swagger-ui-express')
const PORT = 8080;


const routes = require('./routes');


app.use(express.json());

app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//https://app.fl0.com/weatherhour/MyApp