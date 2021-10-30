const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');

const PORT = process.env.PORT || 3005;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(`public`));


app.use(require("./routes/api"));
app.use(require("./routes/htmlRoutes.js"));



mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Workout',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,

    });
    

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));