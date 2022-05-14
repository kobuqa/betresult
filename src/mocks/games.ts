import {GameType} from "../types/game.type";

export const games: GameType[] = [
	{
		id: 0,
		teamOne: 'Poland',
		teamTwo: 'Belarus',
		totalLess: true,
		totalLessCoefficient: 1.45,
		totalMoreCoefficient: 2.44
	},	{
		id: 1,
		teamOne: 'USA',
		teamTwo: 'Russia',
		totalLess: false,
		totalLessCoefficient: 1.65,
		totalMoreCoefficient: 2.1
	},	{
		id: 2,
		teamOne: 'Greece',
		teamTwo: 'France',
		totalLess: true,
		totalLessCoefficient: 1.75,
		totalMoreCoefficient: 2.7
	},	{
		id: 3,
		teamOne: 'Canada',
		teamTwo: 'Sweden',
		totalLess: true,
		totalLessCoefficient: 1.15,
		totalMoreCoefficient: 2.8
	}
]
