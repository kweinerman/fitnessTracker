const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(`public`));


app.use(require("./routes/api"));
app.use(require("./routes/htmlRoutes"));



mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',)
    

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));