let express = require('express')
let app = express()

app.get('/', (req,res) => {
    console.log('Hello world')
    res.send('Hello world')
})

app.get('/crash',(req,res) => {
    res.send('Crash!! ')
    res.send('Crash')
    prpcess.exit(1)

})

app.listen(process.env.PORT,
    ()=>console.log('Server is running at',process.env.PORT))