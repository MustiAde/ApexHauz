const express = require('express');
const app = express(); 


// app.locals.moment = require('moment')
const PORT = 8000
app.get('/',(req, res) => {
    res.send('Welcome to APEXHAUZ',);
});
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`))