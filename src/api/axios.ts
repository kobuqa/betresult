import axios from "axios";

export const api = axios.create({ baseURL: 'https://bet-result.herokuapp.com/api/' })
