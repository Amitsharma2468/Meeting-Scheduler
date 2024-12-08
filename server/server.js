const express = require('express');

require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/',(req,res) =>{
    res.send('Hello');
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));