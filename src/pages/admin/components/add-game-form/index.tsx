import React from 'react';
import {Button, Paper, Stack, Switch, TextField, Typography} from "@mui/material";
import {useForm} from "../../../../hooks/useForm";

const AddGameForm = () => {
	const {formValue, register} = useForm({teamOne: '', teamTwo: '', totalLessCoefficient: '', totalMoreCoefficient: '', totalLess: false})
	return (
		<Paper sx={{padding: 2, display: 'flex', flexDirection: 'column', rowGap: 2}}>
			<Typography>Add game</Typography>
			<TextField {...register('teamOne')} label="Team One"/>
			<TextField {...register('teamTwo')} label="Team Two"/>
			<TextField {...register('totalLessCoefficient')} label="Total Less Coefficient"/>
			<TextField {...register('totalMoreCoefficient')} label="Total More Coefficient"/>
			<Stack direction="row" spacing={1} alignItems="center">
				<Typography>Less</Typography>
				<Switch {...register('totalLess', 'switch')} />
				<Typography>More</Typography>
			</Stack>
			<Button variant="outlined" onClick={() => console.log(formValue)}>Add Game</Button>
		</Paper>
	);
};

export default AddGameForm;
