import { createContext } from 'react';

import { ContextType } from './types';
// Создание контекста с применением типов
export const StorageContext = createContext<ContextType | undefined>(undefined);
