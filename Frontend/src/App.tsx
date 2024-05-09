import './App.css'
import NavBar from './components/navbar'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Health from './pages/Health';

function App() {
	return (
		<Router>
			<NavBar/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/health" element={<Health />} />
				</Routes>
		</Router>
  )
}

export default App
