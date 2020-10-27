const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const studentsControllers = require('./controllers/students')
const corsOption = { origin: 'https://student-score-filter-frontend.netlify.app/' }

app.use(express.json())
// app.use(cors())

app.get('/', studentsControllers.getStudents)

app.post('/', cors(corsOption), studentsControllers.saveSingleStudent)

app.listen(port, () => console.log(`Server running on port ${port}`))