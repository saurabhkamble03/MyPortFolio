import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProjectDisplay from "./pages/ProjectDisplay"
import Skills from "./pages/Skills"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/projects' element= {<Projects/>} />
          <Route path='/experience' element= {<Experience/>} />
          <Route path='/education' element= {<Education/>} />
          <Route path='/project/:id' element= {<ProjectDisplay/>}/>
          <Route path="/skills" element= {<Skills/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
