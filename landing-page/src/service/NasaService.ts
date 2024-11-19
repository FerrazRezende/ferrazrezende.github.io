import axios, { AxiosInstance } from 'axios'

const nasaService: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api/',  // Para APOD
})

const epicService: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api/epic',  // Para EPIC
})

export interface imgData {
    date: string
    explanation: string
    title: string
    url: string
}

export interface EpicImageData {
    date: string
    image: string
    caption: string
}

// |--------------|
// | APOD Section |
// |--------------|

export const getPictureData = async (): Promise<imgData> => {

    const response = await nasaService.get<imgData>(`/apod`)

    return response.data
}

// ------------------------

// |--------------|
// | EPIC Section |
// |--------------|

export const getEpicData = async (date: string): Promise<EpicImageData[]> => {
    const response = await epicService.get<EpicImageData[]>(`/${date}`)
    return response.data
}


// ------------------------

export default {
    getPictureData,
    getEpicData
}