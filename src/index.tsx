import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./app";
import {HashRouter} from "react-router-dom";
import {theme} from "./theme/theme";
import {StorageProvider} from "./context";
import {ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<HashRouter>
			<ThemeProvider theme={theme}>
				<StorageProvider>
					<App/>
				</StorageProvider>
			</ThemeProvider>
		</HashRouter>
	</React.StrictMode>
);
