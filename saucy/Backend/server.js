const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/user_profile', (req, res) => {
    res.send('list of all user profiles');
})

app.listen(4000, () => {
    console.log("running on port 4000");
})