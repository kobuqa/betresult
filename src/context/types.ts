// Типы экшенов

import {GameType} from "../types/game.type";

export type StorageActionType =
| 'setGames'
| 'setProfit'
// Типизируем сам экшн
export type StorageAction = {
	type: StorageActionType;
	payload?: any;
};
// Типизируем состояние
export type StorageState = {
games: GameType[];
profit: number;
};
// Типизированный dispatch
// eslint-disable-next-line no-unused-vars
export type StorageDispatch = (action: StorageAction) => void;
// Типизированный контекст
export type ContextType = { state: StorageState; dispatch: StorageDispatch };
