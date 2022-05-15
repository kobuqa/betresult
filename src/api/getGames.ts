import {api} from "./axios";
import {GameType} from "../types/game.type";

export const getGames = () => api.get<GameType[]>('/games');
