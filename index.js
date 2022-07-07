const express = require('express');
const cors = require('cors');

const sequelize = require('./app/database/database');

const app = express();

app.use(express.json());
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
