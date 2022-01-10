import express, { Request, Response } from 'express'
import { router } from './routes'
import dotenv from 'dotenv'
import path from 'path'
import { mongooseConnect } from './database/mongo'

dotenv.config()

mongooseConnect()

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.use((req: Request, res: Response) => {
    res.status(400).send('Not found')
})

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))