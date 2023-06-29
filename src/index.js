import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Profile from './Pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Router>
   		<App />
		<Routes>
			<Route path='/profile' element={<Profile/> }/>
		</Routes>
	</Router>
  </React.StrictMode>
);
