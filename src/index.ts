import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.json({ status: 'Running Skeet Worker Server' })
})

app.post('/run', (req, res) => {
  // Define worker task here
  res.json({ status: 'Success!' })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
