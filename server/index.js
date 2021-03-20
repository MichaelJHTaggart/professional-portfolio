require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session')
const nodeCtrl = require('./controllers/nodemailerController')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env
const app = express()

app.use(express.json())
app.use(session({
 resave: false,
 saveUninitialized: true,
 secret: SESSION_SECRET,
 cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}))

app.use(express.static(`${__dirname}/../build`)) //serving our build folder

app.post('/send', nodeCtrl.autoEmail)

app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, '../build/index.html'))
})

massive({
 connectionString: CONNECTION_STRING,
 ssl: { rejectUnauthorized: false }
}).then(db => {
 app.set('db', db);
 console.log('db connected')
 app.listen(SERVER_PORT, () => console.log(`Rocking out on port ${SERVER_PORT}`))
})