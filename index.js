require('dotenv').config();

// Import modules
const express = require('express');
const port = process.env.PORT;
const app = express();

// Setting up the view engine
app.set('view engine', 'ejs');

// Middleware to parse JSON request bodies
app.use(express.urlencoded({extende:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: 1,
        message: 'Welcome to the API'
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
