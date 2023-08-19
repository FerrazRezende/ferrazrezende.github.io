import axios from "axios"



const idadeDoMiguel = axios.create({
    baseURL: "https://api-do-miguel.onrender.com/"
})

export default idadeDoMiguel;