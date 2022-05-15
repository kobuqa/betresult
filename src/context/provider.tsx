import { FC, memo, useMemo, useReducer } from 'react';

import { StorageContext } from './context';
import { storageReducer } from './reducer';

export const StorageProvider: FC<any> = memo(({ children }) => {
	// Инциализируем редьюсер
	const [storageState, storageDispatch] = useReducer(storageReducer, {
	games: [],
	profit: 0
	});
	// Во избежание ререндеров :)
	const value = useMemo(
		() => ({
			state: storageState,
			dispatch: storageDispatch,
		}),
		[storageState, storageDispatch],
	);

	return <StorageContext.Provider value={value}>{children}</StorageContext.Provider>;
});

StorageProvider.displayName = 'StorageContextProvider';
