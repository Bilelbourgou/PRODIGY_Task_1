
const express = require('express')
const cors = require('cors')
const connectDB = require('./db');



const app = express()
const port = 4000

// Connect Database
connectDB();

app.use(cors())
app.use(express.json({extended: false}))

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})