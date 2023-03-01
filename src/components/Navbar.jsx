import { useState, useEffect } from 'react'
import {FiSun} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {RxDividerVertical} from 'react-icons/rx'
import {BsMoonStarsFill} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true)
  const handledarkmode = () => {  
        setDarkMode(false)
  }
  return (
    <div className=" fixed top-0 left-0 right-0 flex justify-between mr-12 ml-12 mt-10 border-b-2 border-sky-900 border-solid  shadow-xl shadow-black-900 items-center">
      <div className="">
        <h1 className="text-4xl font-bold  text-[#0c4a6e] hover:text-gray-700 ">
            The Quran
        </h1>
      </div>
      <div className="search flex mb-2 items-center justify-between border-4 border-[#0c4a6e] border-solid rounded-lg">
        <input type="text" placeholder="Search" className=" outline-none p-2 mr-4"/>
        <FaSearch className="text-3xl text-[#0c4a6e] hover:bg-gray-200 rounded-lg ml-2"/>
      </div>
      <div className="list">
        <ul className="flex items-center">
            <li className='flex justify-between'>
            <li className=" text-3xl font-bold mr-6 text-[#0c4a6e] hover:text-gray-700">
                <a href="/">Home</a>
            </li>
            <li className="text-3xl font-bold mr-6 text-[#0c4a6e] hover:text-gray-700">
                <a href="/about">About</a>
            </li>
            </li>
            <li className="text-5xl font-bold mr-6 text-gray-400"><RxDividerVertical/></li>
            <li className='flex justify-between'>
            <li className="text-3xl font-bold mr-6 text-[#0c4a6e] hover:text-gray-700 cursor-pointer" onClick={handledarkmode}>
              {darkMode ? <FiSun/> : <BsMoonStarsFill/>}
            </li>
            <li className="text-3xl font-bold mr-6 text-[#0c4a6e] hover:text-gray-700">
              <a href="https://github.com/Aarize29/The-Quran"><BsGithub/></a>
            </li>
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
