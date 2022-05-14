import {
	Box,
	Button,
	Paper,
	Stack,
	Switch,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextField,
	Typography
} from "@mui/material";

import {games} from "../../mocks/games";
import {useForm} from "../../hooks/useForm";

const HomePage = () => {

	const {formValue, register} = useForm({totalLess: false, sum: '0'})
	const handleCalculate = () => console.log(formValue, 'Sent!')

	return (
		<Box display="flex" columnGap={4}>
			<Paper sx={{padding: 3, maxWidth: '30rem'}}>
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
			<Paper sx={{maxWidth: '30rem'}}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align="center">Team One</TableCell>
							<TableCell align="center">Team Two</TableCell>
							<TableCell align="center">Total Less Coefficient</TableCell>
							<TableCell align="center">Total More Coefficient</TableCell>
							<TableCell align="center">Total Less</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{games.map(game => (
							<TableRow key={game.id}>
								<TableCell align="center">{game.teamOne}</TableCell>
								<TableCell align="center">{game.teamTwo}</TableCell>
								<TableCell align="center">{game.totalLessCoefficient}</TableCell>
								<TableCell align="center">{game.totalMoreCoefficient}</TableCell>
								<TableCell align="center">{game.totalLess ? '+' : '-'}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
			<Paper sx={{padding: 3, maxWidth: '30rem', height: '2rem'}}>
				<Typography>Profit: {0}</Typography>
			</Paper>
		</Box>
	);
};

export default HomePage;
