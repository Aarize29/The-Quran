import { useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import data from '../../data.js'
import { FaSearch } from 'react-icons/fa'
import './Page.css'
let img= '../assets/img.png'
const Page = () => {
    const id= useParams()
     const details= data.data.surahs.filter((item)=> item.number == id.id)
     
    const ayahs= details.map((item)=> item.ayahs)
    const number= ayahs.map((item)=> item.map((item)=> item.number))

    const str= ayahs.map((item)=> item.map((item)=> item.text)).join(' ')
    console.log(str)


    
  return (
    <div className="flex justify-between" >
      <div className="sidemenu flex flex-col  cursor-pointer text-2xl   w-3/12 overflow-y-scroll h-screen text-center   ">
      <div className="search1 li  flex w-full items-center mt-5 justify-between border-black border-4 border-solid rounded-lg">
        <input type="text" placeholder="Search" className=" outline-none w-full p-3 m-1 "/>
        <FaSearch className="text-3xl  cursor-pointer  rounded-lg ml-2"/>
      </div>
        
      {data.data.surahs.map((item) => {
        return (
          <Link to = {`/page/${item.number}`} key={item.number}>
          <div className="li flex justify-center items-center h-10 mt-10   text-2xl hover:text-red-900  font-bold">
            <div className="text-2xl p-3 m-1">{item.englishName}</div>
          </div>
          </Link>
        )
      }
      )}

      </div>

      <div className="sidemenu flex flex-col text-2xl h-10 mt-10 w-full ">
          <div className='text-6xl h-10 flex  justify-center mb-20'>{details.map((item)=> item.englishName)}</div>
          <h1 className='text-6xl h-10 flex  justify-center mb-20'>'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
          <h1 className='text-3xl h-10 flex  justify-center mb-10'>With The Name Of Allah, The Most Gracious And The Most Merciful</h1>
          <hr />
         <p className='text-center h-10 mt-10 '>{str}</p> 
      </div>
      <div className="sidemenu flex flex-col  text-2xl  w-3/12 h-5/6 p-5 ">
      <img  className= "w-full h-[65%]" src="https://c8.alamy.com/comp/2FYTYNN/the-name-of-surah-of-the-holy-quran-surah-al-fatihah-translation-chapter-the-opener-arabic-calligraphy-greeting-card-2FYTYNN.jpg" alt="Sunset in the mountains"/>
      <iframe width="360" height="315" src="https://www.youtube.com/embed/sjS8vkvycmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Page
