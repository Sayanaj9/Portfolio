
import './App.css'
import { Route,BrowserRouter as Router,Navigate, Routes} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from "./sections/home"
import Experience from "./sections/experience"
import "./styles/home.scss"
function App() {
  
  return (
    <div className="main_container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/experience' element={<Experience key="experience"/>} />
          <Route path='/projects' element={<Experience key="projects"/>} />
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </Router>
        
    </div>
    
  )
}

export default App
