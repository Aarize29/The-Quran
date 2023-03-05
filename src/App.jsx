import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import datas from '../data.js'
import About from './components/About'
import Page from './components/Page'
import {Link, Route,BrowserRouter as Router,Routes} from 'react-router-dom'

function App() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        setData(datas.data.surahs)
    }, [])

    const selectPageHandler=(selectedPage)=>{
      if(selectedPage>=1 && selectedPage <=Math.ceil(data.length/3) && selectedPage!==page)
      setPage(selectedPage)
    }


  return (
    <div className="App">
      <Router>
      <div>
      <Navbar/>
      </div>

      <section className='cards-section '>
      <Routes>
         <Route path="/" element={<section  >
         
<div className="flex flex-wrap m-10 mr-5 justify-center">

  {data.slice(page*8-8,page*8).map((item) => {
    return (
      <Link to = {`/page/${item.number}`} key={item.number}>
        <Card 
      number={item.number}
      name={item.name}
      englishName={item.englishName}
      englishNameTranslation={item.englishNameTranslation}
      numberOfAyahs={item.numberOfAyahs}
      revelationType={item.revelationType}
      />
      </Link>     

    )
  }
  )}

</div>

{
        data.length>0 &&(
          <div className='pagination'>
            
            <span onClick={()=>selectPageHandler(page-1)}
             className={page>1?'':'hidden'}
            >◀</span>
            {
             [...Array(Math.ceil(data.length/8))].map((_,index)=>{
                return(
                  <span 
                  className={page===index+1?'bg-[#0c4a6e] text-white':''}
                  key={index} onClick={()=>selectPageHandler(index+1)}>{index+1}</span>
                )
              })
            }
            <span onClick={()=>selectPageHandler(page+1)}
            className={page<Math.ceil(data.length/8)?'':'hidden'}
            >▶</span>
          </div>
        )
}
  
</section>}/>

      
        <Route path="/about" element={<About/>}/>
        <Route path='/page/:id' element={<Page/>}/>
      </Routes>
      </section>
      
      </Router>
    </div>
  )
}

export default App
