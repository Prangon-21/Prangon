const messageRoute = require('./routes/message')
const Express = require('express')

const app = Express();

app.use(Express.json())
app.use('/message', messageRoute)

app.listen(port, () => {
    console.log("listening...")
})