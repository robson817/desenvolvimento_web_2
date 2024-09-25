import express from 'express'
import routes from './routes/index.js' // porque não funciona quando uso o copy relative path?

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Servidor está executando em http://localhost:${PORT}`)
})