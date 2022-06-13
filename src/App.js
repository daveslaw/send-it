import "./App.css";
import Home from "./routes/Home/Home";
import { Route, Routes, Outlet } from "react-router-dom";



const NavBar = () => {
	return (
		<div>
			<div><h2>NavBar</h2></div>
			<Outlet/>
		</div>
	)
}

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavBar />}>
				<Route index element={<Home />}/>

				


			</Route>

		
		</Routes>
	);
};

export default App;
