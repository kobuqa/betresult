import {StorageAction, StorageState} from './types';

export const storageReducer = (state: StorageState, action: StorageAction): StorageState => {
	const reducer = {
		setGames: {
			...state,
			games: action.payload
		},
		setProfit: {
			...state,
			profit: action.payload
		}
	};
	return reducer[action.type];
};
