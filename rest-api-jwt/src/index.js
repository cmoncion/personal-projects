
import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import cors from 'cors'

// Routes imported
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'


// Sequelize connection SQLite
import db from './database/db.js'
db.sync()


const app = express()

// Variables setting
app.set('port', process.env.PORT || 3100)

// Middlewares
app.use(cors({origin:"*"}))
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api', authRouter)
app.use('/api', userRouter)


app.listen(app.get('port'), ()=>{
    console.log(`Server running on port: ${app.get('port')} - http://localhost:3100`)
})