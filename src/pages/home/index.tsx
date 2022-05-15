import {
	Grid
} from "@mui/material";

import ResultTable from "../../shared/result-table";
import BidCalculator from "./components/bid-calculator";
import {Chart} from "./components/chart";
import Profit from "./components/profit";

const HomePage = () => {

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={12} lg={6}>
				<ResultTable/>
			</Grid>
			<Grid item xs={12} sm={12} md={6}>
				<Chart/>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={6}>
				<BidCalculator/>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={6}>
				<Profit/>
			</Grid>

		</Grid>
	);
};

export default HomePage;
