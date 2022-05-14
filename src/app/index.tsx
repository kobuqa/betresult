import React from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import HomePage from "../pages/home";
import AdminPage from "../pages/admin";
import {AppBar, Box, Button, ThemeProvider} from "@mui/material";
import {theme} from "../theme/theme";

const App = () => {
	const navigate = useNavigate()
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<AppBar position="static" color="transparent">
					<Box display="flex">
						<Button onClick={() => navigate('/')}>Home</Button>
						<Button onClick={() => navigate('/admin')}>Admin</Button>
					</Box>
				</AppBar>
				<Box p={2}>
					<Routes>
						<Route path="/" element={<HomePage/>}/>
						<Route path="admin" element={<AdminPage/>}/>
					</Routes>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default App;
