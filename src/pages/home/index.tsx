import {
	Grid, Paper,
	Typography
} from "@mui/material";

import {getGames} from "../../api/getGames";
import {useAxios} from "../../hooks/useAxios";
import {GameType} from "../../types/game.type";
import ResultTable from "../../shared/result-table";
import BidCalculator from "./components/bid-calculator";
import {Chart} from "./components/chart";

const HomePage = () => {

	const {data} = useAxios<GameType[]>(getGames);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={12} lg={6} >
				<ResultTable data={data}/>
			</Grid>
			<Grid item xs={12} sm={12} md={6}>
				<Paper sx={{padding: 2}}>
					<Chart />
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={6} >
				<BidCalculator/>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={6} >
				<Paper sx={{ height: '100%', padding: 2}}>
					<Typography>Profit: {0}</Typography>
				</Paper>
			</Grid>

		</Grid>
	);
};

export default HomePage;
