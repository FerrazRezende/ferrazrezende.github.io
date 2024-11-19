import axios, { AxiosInstance } from 'axios'

const deepLService: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Content-Type": "application/json",
    }
})

export interface TranslationData {
    text: string,
    target_lang: string
}

const translateText = async (text: string, targetLang: string): Promise<string | null> => {
    const response = await deepLService.post("/api/translate", {
        text: text,
        target_lang: targetLang
    })

    return response.data.translations[0].text
}

export default {
    translateText
}