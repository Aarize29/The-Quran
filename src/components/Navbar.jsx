import { useState, useEffect } from 'react'
import {FiSun} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {RxDividerVertical} from 'react-icons/rx'
import {BsMoonStarsFill} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [theme,setTheme]=useState('light-theme')
  const handledarkmode = () => {  
        setDarkMode(!darkMode)
        if (darkMode) {
          setTheme('dark-theme')
        }
        else {
          setTheme('light-theme')
        }
  }
  useEffect(() => {
    document.body.className = theme
  }
  , [theme])


  return (
    <div className="navbar fixed top-0 left-0 right-0 flex justify-between  pr-12 pl-12 pt-10 border-b-2 border-sky-900 border-solid items-center shadow-xl shadow-black-900 items-center">
      <div className="icon ">
        <h1 className=" text-4xl font-bold     ">
            The Quran
        </h1>
      </div>
      <div className="search li  flex mb-2 items-center justify-between border-4  border-solid rounded-lg">
        <input type="text" placeholder="Search" className=" outline-none p-3 m-1"/>
        <FaSearch className="text-3xl cursor-pointer  rounded-lg ml-2"/>
      </div>
      <div className="list">
        <ul className="flex items-center">
            <li className=' flex justify-between'>
            <li className="li text-3xl font-bold mr-6   ">
                <a href="/">Home</a>
            </li>
            <li className="li text-3xl font-bold mr-6   ">
                <a href="/about">About</a>
            </li>
            </li>
            <li className=" li text-5xl font-bold mr-6 text-gray-400"><RxDividerVertical/></li>
            <li className='flex justify-between'>
            <li className="li text-3xl font-bold mr-6    cursor-pointer" onClick={handledarkmode}>
              {darkMode ? <FiSun/> : <BsMoonStarsFill/>}
            </li>
            <li className="li text-3xl font-bold mr-6   ">
              <a href="https://github.com/Aarize29/The-Quran"><BsGithub/></a>
            </li>
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
