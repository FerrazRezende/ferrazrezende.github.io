import axios from "axios";

const nasa = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=nAg6IY3RWfG4xJkVcOTBwB2TtqniaHsBtBVveH62'
})

export default nasa;