import {Paper, Typography} from "@mui/material";
import {useStorage} from "../../../../context";

const Profit = () => {
	const {profit} = useStorage()
	return (
		<Paper sx={{ height: '100%', padding: 2}}>
			<Typography>Profit: ${String(profit)}</Typography>
		</Paper>
	);
};

export default Profit;
