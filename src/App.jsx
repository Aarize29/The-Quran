
import './App.css'
import About from './components/About'
import Page from './components/Page'
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Intro from './components/Intro'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {
    

  return (
    <div className="App">
      <Router>
         <Navbar/>
      <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path='/page/:id' element={<Page/>}/>
      </Routes>

      
      
      </Router>
    </div>
  )
}

export default App
