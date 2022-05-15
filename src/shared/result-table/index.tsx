import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useStorage} from "../../context";

const ResultTable = () => {
	const {games} = useStorage();
	return (
		<Paper sx={{padding: 2, height: '100%'}}>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell align="center">Team One</TableCell>
					<TableCell align="center">Game Result</TableCell>
					<TableCell align="center">Team Two</TableCell>
					<TableCell align="center">Total Less Coefficient</TableCell>
					<TableCell align="center">Total More Coefficient</TableCell>
					<TableCell align="center">Total Less</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{games.map(({teamOne,  gameResult,  teamTwo, totalMoreCoefficient, totalLessCoefficient, totalLess}, idx) => (
					<TableRow key={idx}>
						<TableCell align="center">{teamOne}</TableCell>
						<TableCell align="center">{gameResult}</TableCell>
						<TableCell align="center">{teamTwo}</TableCell>
						<TableCell align="center">{totalLessCoefficient}</TableCell>
						<TableCell align="center">{totalMoreCoefficient}</TableCell>
						<TableCell align="center">{totalLess ? '+' : '-'}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
		</Paper>
	);
};

export default ResultTable;
