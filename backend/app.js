const express = require('express')
const { authRouter } = require('./src/routers/authRouter')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { categoryRouter } = require('./src/routers/categoryRouter')

const app = express()
const frontendUrl = 'http://localhost:5174';

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());

app.use(cors({
  origin: frontendUrl, 
  credentials: true,
}));

authRouter(app)
categoryRouter(app)

module.exports = app