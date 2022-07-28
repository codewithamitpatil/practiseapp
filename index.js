const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');
const app = express();

app.use(cors('*'));


app.get('', async (req, res) => {
    res.send('welcome from amit new serce');
})

app.listen(port, () => {
    console.log(`server is running at :: ${process.env.HOST} // ${port}`);
})