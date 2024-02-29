import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

import indexRouter from './routes/index'
import usersRouter from './routes/users'

var app = express()
mongoose
  .connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
  .then(() => {
    console.log('Success to Database')
  })
  .catch((err) => {
    console.log(err.message)
  })

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(
  logger(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version"'
  )
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
dotenv.config()

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
