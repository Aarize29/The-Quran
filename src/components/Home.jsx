import { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import datas from '../../data.js'
import {Link} from 'react-router-dom'
const Home = () => {
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
    <div>
  
      <section className='cards-section '>
      <div className='lg:text-4xl sm:text-2xl md:text-3xl font-bold text-center mt-4'>Surahs</div>
      <hr />
     <section  >
         
<div className="flex flex-wrap text-sm lg:text-md m-10 mr-5 justify-center">

  {data.map((item) => {
    return (
      <Link to = {`/page/${item.number}`} key={item.number}>
        <Card 
      number={item.number}
      name={item.name}
      englishName={item.englishName}
      englishNameTranslation={item.englishNameTranslation}
      numberOfAyahs={item.numberOfAyahs}
      revelationType={item.revelationType}
      image={item.img}
      />
      </Link>     

    )
  }
  )}

</div>
{/* 
{
        data.length>0 &&(
          <div className='pagination w-'>
            
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
} */}
  
</section>

      
        
      </section>
    </div>
  )
}

export default Home
