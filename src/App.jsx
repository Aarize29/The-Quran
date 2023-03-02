import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import datas from '../data.js'

function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(datas.data.surahs)
    }, [])
    console.log(data)
  return (
    <div className="App">
      <div>
      <Navbar/>
      </div>
      <section>

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
      </section>

    </div>
  )
}

export default App
