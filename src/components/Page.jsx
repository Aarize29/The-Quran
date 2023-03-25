import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import data from '../../data.js'
import { FaSearch } from 'react-icons/fa'
import Navbar from './Navbar.jsx'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import './Page.css'
import './Popup.css'
import Popup from './Popup.jsx'



const Page = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isNavOpen,setIsNavOpen]=useState(false)
    const [showSidebar,setShowSidebar]=useState("hidden");
    const [buttonPopup, setButtonPopup] = useState(false)
 
    const view=()=>{
      setButtonPopup(true);
    }
  const handleNav = () => {
    setIsNavOpen(!isNavOpen)
    if(isNavOpen){
      setShowSidebar('hidden')
    }
    else{
      setShowSidebar('flex')
    }
    
  }
    const id= useParams()
    console.log(id)
     const details= data.data.surahs.filter((item)=> item.number == id.id)
     const youtube= details.map((item)=> item.youtube)
    const ayahs= details.map((item)=> item.ayahs)
    const number= ayahs.map((item)=> item.map((item)=> item.number))
    // const image='../../assets/surah-114.png'
    const image= details.map((item)=> item.img)   
    const str= ayahs.map((item)=> item.map((item)=> item.text)).join(' ')
    

    
  return (
    <>
    
    <div className="flex justify-between w-fit" >
      
      
      <div className={`sidemenu sidebar hidden lg:flex flex-col  cursor-pointer text-xl   lg:w-3/12 overflow-y-scroll h-screen text-center`}>
      
      <div className="search1 li flex items-center mt-5 justify-between border-black border-4 border-solid rounded-lg">
        <input type="text" placeholder="Search" className="text-black outline-none w-full p-3 m-1 " onChange={event=>{setSearchTerm(event.target.value)}}/>
        <FaSearch className="text-2xl  cursor-pointer  rounded-lg ml-2"/>
      </div>
        
      {data.data.surahs.filter((val)=>{
        if(searchTerm == ""){
          return val
        }else if(val.englishName.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((item,key) => {
        return (
          <Link to = {`/page/${item.number}`} key={item.number}>
          <div className={`li flex  justify-start items-center h-10 mt-10 ${
            item.number == id.id && `bg-yellow-500`
            } text-2xl hover:text-grey font-bold`} key={key}>
            <div className="text-xl p-2">{item.number}</div>
            <div className="text-xl p-2 ">{item.englishName}</div>
          </div>
          </Link>
        )
      }
      )}

      </div>
      
      <div className="sidemenu page details  flex justify-between lg:flex-col text-sm lg:w-full ">
      <div>
        
      </div>
      <div className=" lg:hidden lg:text-3xl font-bold  " >
             {isNavOpen?<div className={`sidemenu sidebar ${showSidebar} lg:flex flex-col  cursor-pointer text-sm  lg:w-3/12 overflow-y-scroll h-screen text-center`}>
      <button className="  font-bold  " onClick={handleNav}>
             {isNavOpen?<AiOutlineClose/>:""}
      </button>
      <div className="search1 li  flex w-full items-center mt-2 justify-between border-black border-4 border-solid rounded-lg">
        <input type="text" placeholder="Search" className="text-black outline-none w-full p-1 m-1 " onChange={event=>{setSearchTerm(event.target.value)}}/>
        <FaSearch className="text-sm  cursor-pointer  rounded-lg ml-1"/>
      </div>
        
      {data.data.surahs.filter((val)=>{
        if(searchTerm == ""){
          return val
        }else if(val.englishName.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((item,key) => {
        return (
          <Link to = {`/page/${item.number}`} key={item.number}>
          <div className={`li flex  justify-start items-center h-10 mt-4 ${
            item.number == id.id && `bg-yellow-500`
            } text-sm hover:text-grey font-bold`} key={key}>
            <div className="text-sm p-1">{item.number}</div>
            <div className="text-sm p-1 ">{item.englishName}</div>
          </div>
          </Link>
        )
      }
      )}

      </div>:<div onClick={handleNav}><GiHamburgerMenu/></div>}
      </div>
      <div className="sidemenu page details  flex flex-col text-2xl lg:w-full ">
      <div className="flex lg:hidden justify-center">
         <button onClick={view} className='video-btn hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full text-sm mt-2' >🔊Listen in Arabic</button>
      </div>
          <div className='text-xl font-bold lg:font-normal lg:text-5xl  flex  mt-5  justify-center mb-5 lg:mb-10'>{details.map((item)=> item.englishName)}- {details.map((item)=> item.englishNameTranslation)}</div>
          <h1 className='text-xl font-bold lg:font-normal lg:text-5xl h-10 flex  justify-center lg:mb-10'>'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
          <h1 className='text-sm p-5 font-bold  lg:text-2xl  flex  justify-center lg:mb-5'>With The Name Of Allah, The Most Gracious And The Most Merciful</h1>
          <hr />
         <p className='text-left text-sm  lg:text-2xl sm:p-3 lg:p-5 h-10 mt-10 '>{str}</p> 
      </div>
      </div>
      <div className="sidemenu hidden lg:flex flex-col   text-2xl  w-3/12 h-5/6 p-5 ">
      <img  className= "w-[full] h-[35%] mb-10" src={image} alt="Sunset in the mountains"/>
      <iframe width="300" height="270" src={`https://www.youtube.com/embed/${youtube}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
      <div className="h-fit grid rounded-xl items-center border-solid border-grey border-[2px] ">
      <iframe width="200" height="150" src={`https://www.youtube.com/embed/${youtube}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </Popup>
    </div>
    </>
  )
}

export default Page
