import React from 'react';
import {Box, Button, Paper, Stack, Switch, TextField, Typography} from "@mui/material";
import {useForm} from "../../../../hooks/useForm";
import {makeBid} from "../../../../api/makeBid";
import {useStorage} from "../../../../context";

const BidCalculator = () => {
	const {formValue: {totalLess, sum}, register} = useForm({totalLess: false, sum: '0'})
	const {setProfit} = useStorage()
	const handleCalculate = async () => {
		const {data: {result}} = await makeBid({sum: +sum, totalLess});
		setProfit(result);
	}
	return (
		<Paper sx={{height: '100%', padding: 2}}>
			<Box display="flex" flexDirection="column" rowGap={2}>
				<Typography align="center" variant="h5">Calculate Result</Typography>
				<Stack direction="row" spacing={1} alignItems="center">
					<Typography>More</Typography>
					<Switch {...register('totalLess', 'switch')} />
					<Typography>Less</Typography>
				</Stack>
				<TextField variant="outlined" label="Bid Amount" type="number" {...register('sum')}/>
				<Button variant="outlined" onClick={handleCalculate}>Calculate</Button>
			</Box>
		</Paper>
	);
};

export default BidCalculator;
