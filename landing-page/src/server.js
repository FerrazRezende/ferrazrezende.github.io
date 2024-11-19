require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/translate', async (req, res) => {
    const { text, target_lang } = req.body

    try {
        const response = await axios.post('https://api-free.deepl.com/v2/translate', null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `DeepL-Auth-Key ${process.env.VUE_APP_DEEPL_KEY}`
            },
            params: {
                text: text,
                target_lang: target_lang
            }
        })

        res.json(response.data)
    } catch (e) {
        console.error(e)
        res.status(500).json({error: "Erro ao traduzir texto"})
    }
})

app.get('/api/epic/:date', async (req, res) => {
    const { date } = req.params

    const apiKey = process.env.VUE_APP_NASA_KEY

    try {
        const response = await axios.get(`https://epic.gsfc.nasa.gov/api/enhanced/date/${date}`, {
            params: {
                api_key: apiKey
            }
        })

        res.json(response.data)
    } catch (e) {
        console.error(e)
        res.status(500).json({error: "Erro ao exibir imagem"})
    }
})

app.get('/api/apod', async (req, res) => {

    const apiKey = process.env.VUE_APP_NASA_KEY

    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)

        res.json(response.data)
    } catch (e) {
        console.error(e)
        res.status(500).json({error: "Erro ao exibir imagem"})
    }

})

app.listen(3001, () => {
    console.log("Proxy rodando")
})