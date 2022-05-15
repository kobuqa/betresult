import {useContext, useCallback } from 'react';

import { StorageContext } from './context';
import {GameType} from "../types/game.type";

// Типизируем хук
type useStorageReturnType = {
	games: GameType[];
	setGames: (payload: GameType[]) => void;
	profit: number;
	setProfit: (payload: number) => void;
};

// Имплементим хук
export const useStorage = (): useStorageReturnType => {
	const context = useContext(StorageContext);
	// Если не обернули прилагу в провайдер или криво обернули - будет ошибка ;)
	if (context === undefined) throw new Error('useStorage must be used within a StorageProvider');
	return {
		games: context.state.games,
		setGames: useCallback(
			(payload: GameType[]) => context.dispatch({ type: 'setGames', payload }),
			[context],
		),
		profit: context.state.profit,
		setProfit: useCallback(
			(payload: number) => context.dispatch({ type: 'setProfit', payload }),
			[context],
		),
	};
};
