// Import Package
const express = require('express');

// Instantiate 
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`AppServer is running on port ${PORT}`);
})

