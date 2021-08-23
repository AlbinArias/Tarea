const express = require ('express');
const { traceDeprecation } = require('process');
const app =express()

app.use(express.static('Stylo'))
app.use('/css',express.static(__dirname + 'public/css'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/view/index.html' )
})
app.listen(3000, () =>  {
    console.log('server on port 3000');
})