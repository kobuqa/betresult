import {api} from "./axios";

export const getGames = () => api.get('/game')
