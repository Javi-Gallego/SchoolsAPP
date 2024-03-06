
import express, { Application } from 'express'
import 'dotenv/config'
import router from './routes/router'

export const app:Application = express()

app.use(express.json())

app.get("/API/healthy", (req, res) => {
    res.send("Server is healthy and running!")
})

app.use("API", router)