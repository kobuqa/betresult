import {
	Box
} from "@mui/material";
import ResultTable from "../../shared/result-table";
import {useAxios} from "../../hooks/useAxios";
import {GameType} from "../../types/game.type";
import {getGames} from "../../api/getGames";
import AddGameForm from "./components/add-game-form";

const AdminPage = () => {
	const {data} = useAxios<GameType[]>(getGames);
	return (
		<Box display="flex" columnGap={4}>
			<ResultTable data={data}/>
			<AddGameForm/>
		</Box>
	);
};

export default AdminPage;
