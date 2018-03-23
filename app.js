
const env = process.env.APP_ENV || 'development';
require('dotenv').config();

const express = require('express');
const path = require('path');
const db = require('./app/models');
const myObj = require('./objects');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (env === 'development') {
    app.use((err, req, res, next) => {
        req.log.error(err, 'Unhandled error');
        res.status(err.status || 500).json({
            msg: err.message,
            error: err,
        });
    });
}

app.use((err, req, res, next) => {
    req.log.error(err, 'Unhandled error');
    res.status(err.status || 500).json({
        msg: err.message,
        error: {},
    });
});

app.listen(process.env.PORT, function () {
    console.log('listen port ' + process.env.PORT);
});

db.Notification_for_admin.sync({force:true}).then(() => {
    return db.Notification_for_admin.create(myObj.notification_for_admin);
});

 db.User.create(myObj.user);
console.log(myObj.interview);

db.Interview.sync({force:true}).then(() => {
    return db.Interview.create(myObj.interview);
});

