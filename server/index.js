import express from 'express'
import renderOnServer from './middleware/render'

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Server app is listening at http://localhost:${port}`)
})

app.use('/build/client', express.static('build/client'))

app.get('/', renderOnServer)
