const express = require("express");
const app = express();
const userRouters = require('./routes/user')

const { dbConnection } = require('./db/dbConnection')
dbConnection();

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use('/user', userRouters);

app.get('*', (req, res) => {
    return res.json({ msg: "Could not found!" })
})
app.listen(8000, () => console.log(`Server started at ${PORT}`))