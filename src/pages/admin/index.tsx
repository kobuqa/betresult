import {
	Box, Button,
	Paper, Stack, Switch,
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

const AdminPage = () => {
	const {formValue, register} = useForm({teamOne: '', teamTwo: '', totalLessCoefficient: '', totalMoreCoefficient: '', totalLess: false})
	return (
		<Box display="flex" columnGap={4}>
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
			<Paper sx={{padding: 3, display: 'flex', flexDirection: 'column', rowGap: 2}}>
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
		</Box>
	);
};

export default AdminPage;
