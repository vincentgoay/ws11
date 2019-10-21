// Import Package
const express = require('express');

// Instantiate 
const app = express();

const PORT = process.env.PORT || 3000;

const staticDir = __dirname + '/public';

app.use(express.static(staticDir));

// 
app.get('/images', (req, res, next) => {
    res.sendFile(staticDir + '/images.html');
});

// 
app.get('/videos', (req, res, next) => {
    res.sendFile(staticDir + '/videos.html');
});

// 
app.get('/musics', (req, res, next) => {
    res.sendFile(staticDir + '/musics.html');
});

// Redirect to error pages for unidentified request
// Make sure this is place below all Get functions
app.use((req, res, next) => {
    res.redirect('/error.html');
});

app.listen(PORT, () => {
    console.log(`AppServer is running on port ${PORT}`);
})

