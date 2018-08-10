const express = require('express');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

console.log('PORT', PORT, process.env.NODE_ENV);

app.listen(PORT, () => {
    
});
