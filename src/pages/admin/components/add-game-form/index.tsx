import React from 'react';
import {Button, Paper, Stack, Switch, TextField, Typography} from "@mui/material";
import {useForm} from "../../../../hooks/useForm";
import {addGame} from "../../../../api/addGame";
import {useStorage} from "../../../../context";

const AddGameForm = () => {
	const {setGames} = useStorage();

	const {
		formValue: {
			teamOne, teamTwo, teamOneResult, teamTwoResult, totalLessCoefficient, totalMoreCoefficient, totalLess
		}, register
	} = useForm({
		teamOne: '',
		teamTwo: '',
		teamOneResult: '',
		teamTwoResult: '',
		totalLessCoefficient: '',
		totalMoreCoefficient: '',
		totalLess: false
	})

	const handleAddGame = () => {
		addGame([{
			teamOne,
			teamTwo,
			gameResult: `${teamOneResult}:${teamTwoResult}`,
			totalLess,
			totalLessCoefficient: +totalLessCoefficient,
			totalMoreCoefficient: +totalMoreCoefficient
		}]).then(({data}) => setGames(data));
	}
	return (
		<Paper sx={{padding: 2, display: 'flex', flexDirection: 'column', rowGap: 2}}>
			<Typography>Add game</Typography>
			<TextField {...register('teamOne')} label="Team #1"/>
			<TextField {...register('teamTwo')} label="Team #2"/>
			<TextField {...register('teamOneResult')} label="Team #1 Result"/>
			<TextField {...register('teamTwoResult')} label="Team #2 Result"/>
			<TextField {...register('totalLessCoefficient')} label="Total Less Coefficient"/>
			<TextField {...register('totalMoreCoefficient')} label="Total More Coefficient"/>
			<Stack direction="row" spacing={1} alignItems="center">
				<Typography>More</Typography>
				<Switch {...register('totalLess', 'switch')} />
				<Typography>Less</Typography>
			</Stack>
			<Button variant="outlined" onClick={handleAddGame}>Add Game</Button>
		</Paper>
	);
};

export default AddGameForm;
