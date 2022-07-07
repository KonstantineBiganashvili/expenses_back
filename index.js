const express = require('express');
<<<<<<< Updated upstream

const app = express();

app.listen(8080);
=======
const cors = require('cors');

const sequelize = require('./app/database/database');
const routers = require('./app/router/expense.router');

const app = express();

app.use(express.json());
app.use(routers);
app.use(cors);

const server = async () => {
    try {
        await sequelize.authenticate();
        app.listen(8080);
        console.log(
            'Server has started on port 8080 and connection has been establised to the database'
        );
    } catch (error) {
        console.error(error);
    }
};

server();
>>>>>>> Stashed changes
