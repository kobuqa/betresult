import {api} from "./axios";
import {GameType} from "../types/game.type";

export const addGame = (games: GameType[]) => api.post<GameType[]>('/admin/add-game', games);
