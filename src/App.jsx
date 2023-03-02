import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import datas from '../data.js'
import About from './components/About'
import Page from './components/Page'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'

function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(datas.data.surahs)
    }, [])
    console.log(data)
  return (
    <div className="App">
      <Router>
      <div>
      <Navbar/>
      </div>

      <section className='cards-section'>
      <Routes>
        <Route path="/" element={<section >

<div className="flex flex-wrap m-10 mr-5 justify-center">

  {data.map((item) => {
    return (
      <Card 
      key={item.number}
      name={item.name}
      englishName={item.englishName}
      englishNameTranslation={item.englishNameTranslation}
      numberOfAyahs={item.numberOfAyahs}
      revelationType={item.revelationType}
      />

    )
  }
  )}

</div>
</section>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/page' element={<Page/>}/>
      </Routes>
      </section>
      
      </Router>
    </div>
  )
}

export default App
