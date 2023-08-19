import axios from "axios";

const github = axios.create({
    baseURL: 'https://api.github.com/users/FerrazRezende'
})

export default github;