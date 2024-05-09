import './App.css'
import NavBar from './components/navbar'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";


import { Farm } from './pages/Farm';
import { Chat } from './pages/Chat/chat';
import { Home } from './pages/Home';
import Health from './pages/Health';
import Prediction from './pages/Prediction';


function App() {
	return (
		<Router>
			<NavBar/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/health" element={<Health />} />
					<Route path='/prediction' element={<Prediction/>}/>
					<Route path='/farm' element={<Farm />} />
					<Route path='/chat' element={<Chat />} />
				</Routes>
		</Router>
  )
}

export default App
