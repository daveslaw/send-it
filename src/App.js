import "./App.css";
import Home from "./routes/Home/Home";
import NavBar from './routes/NavBar/NavBar';
import SignIn from './routes/SignIn/SignIn';
import { Route, Routes } from "react-router-dom";


const Shop = () => {
	return (
		<div>I am the shop</div>
	)
}

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop/>}/>
				<Route path='sign-in' element={<SignIn/>}/>
			</Route>
		</Routes>
	);
};

export default App;
