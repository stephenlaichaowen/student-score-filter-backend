const fs = require('fs')
let records = JSON.parse(fs.readFileSync('db/records.json')) || []

exports.getStudents = (req, res) => {
  res.send(records)
}

exports.saveSingleStudent =  (req, res) => {
  const data = req.body
  records.unshift({
    id: Date.now().toString(),
    ...data
  })
  fs.writeFileSync('db/records.json', JSON.stringify(records, null, 4))
  console.log(records);  
  res.send({ 
    status: 'write success',
    records 
  })
}