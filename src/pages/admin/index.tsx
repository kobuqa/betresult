import {
	Box
} from "@mui/material";
import ResultTable from "../../shared/result-table";
import AddGameForm from "./components/add-game-form";

const AdminPage = () => {
	return (
		<Box display="flex" columnGap={4}>
			<ResultTable />
			<AddGameForm/>
		</Box>
	);
};

export default AdminPage;
