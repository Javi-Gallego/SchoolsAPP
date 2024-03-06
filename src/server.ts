
import express, { Application } from 'express'
import 'dotenv/config'
import { AppDataSource } from './db'

const PORT = process.env.PORT || 4001

const app:Application = express()

app.use(express.json())

app.get("/API/healthy", (req, res) => {
    res.send("Server is healthy and running!")
})

const startServer = () => {
    AppDataSource.initialize()
    .then(() => {
        console.log("Database connected")

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err)
    })
}

startServer()