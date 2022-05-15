import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {GameType} from "../../types/game.type";
import {FC} from "react";

interface ResultTableProps {
	data: GameType[]
}

const ResultTable:FC<ResultTableProps> = ( {data}) => {
	return (
		<Paper sx={{padding: 2, height: '100%'}}>
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
				{data.map(({teamOne, teamTwo, totalMoreCoefficient, totalLessCoefficient, totalLess}, idx) => (
					<TableRow key={idx}>
						<TableCell align="center">{teamOne}</TableCell>
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
