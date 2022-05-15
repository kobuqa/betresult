import React, {useEffect} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import HomePage from "../pages/home";
import AdminPage from "../pages/admin";
import {AppBar, Box, Button} from "@mui/material";
import {useAxios} from "../hooks/useAxios";
import {GameType} from "../types/game.type";
import {getGames} from "../api/getGames";
import {useStorage} from "../context";

const App = () => {
	const navigate = useNavigate();
	const {data} = useAxios<GameType[]>(getGames);
	const {setGames} = useStorage();

	useEffect(() => {
		setGames(data)
	}, [data, setGames]);

	return (
			<Box>
				<AppBar position="static" color="transparent" sx={{padding: 1}}>
					<Box display="flex" columnGap={1}>
						<Button variant="outlined" onClick={() => navigate('/')}>Home</Button>
						<Button variant="outlined" onClick={() => navigate('/admin')}>Admin</Button>
					</Box>
				</AppBar>
				<Box p={2}>
					<Routes>
						<Route path="/" element={<HomePage/>}/>
						<Route path="admin" element={<AdminPage/>}/>
					</Routes>
				</Box>
			</Box>
	);
};

export default App;
