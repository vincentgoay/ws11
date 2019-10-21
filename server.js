// Import Package
const express = require('express');

// Instantiate 
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`AppServer is running on port ${PORT}`);
})

