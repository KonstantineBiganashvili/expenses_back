const express = require('express');
const cors = require('cors');

const sequelize = require('./app/database/database');
const routers = require('./app/router/expense.router');

const app = express();

app.use(express.json());
app.use(routers);
app.use(cors);
