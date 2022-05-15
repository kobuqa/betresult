import React from 'react';
import {Box, Button, Paper, Stack, Switch, TextField, Typography} from "@mui/material";
import {useForm} from "../../../../hooks/useForm";

const BidCalculator = () => {
	const {formValue, register} = useForm({totalLess: false, sum: '0'})
	const handleCalculate = () => console.log(formValue, 'Sent!')
	return (
		<Paper sx={{height: '100%', padding: 2}}>
		<Box display="flex" flexDirection="column" rowGap={2}>
			<Typography align="center" variant="h5">Calculate Result</Typography>
			<Stack direction="row" spacing={1} alignItems="center">
				<Typography>Less</Typography>
				<Switch {...register('totalLess', 'switch')} />
				<Typography>More</Typography>
			</Stack>
			<TextField variant="outlined" label="Bid Amount" type="number" {...register('sum')}/>
			<Button variant="outlined" onClick={handleCalculate}>Calculate</Button>
		</Box>
		</Paper>
	);
};

export default BidCalculator;
