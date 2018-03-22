let Sequelize = require('sequelize');
let sequelize = new Sequelize('test_database', 'postgres', 'linux', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

users = [
    {firstName: 'Varea', lastName: 'Hancock'},
    {firstName: 'Doer', lastName: 'Hancock'},
    {firstName: 'Gewr', lastName: 'Hancock'},
    {firstName: 'Gtrie', lastName: 'Hancock'},
    {firstName: 'Vue', lastName: 'Hancock'},
    {firstName: 'Blie', lastName: 'Hancock'},
    {firstName: 'Bhie', lastName: 'Hancock'},
    {firstName: 'Hutye', lastName: 'Hancock'},
    {firstName: 'Kilop', lastName: 'Hancock'},
    {firstName: 'Deerpt', lastName: 'Hancock'},
    {firstName: 'John', lastName: 'Hancock'},
];

users.forEach(user => {
    User.create(user);
});

