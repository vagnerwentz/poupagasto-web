import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5056",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json"
    }
})