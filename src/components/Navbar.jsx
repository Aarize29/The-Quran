import { useState, useEffect } from 'react'
import {FiSun} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {RxDividerVertical} from 'react-icons/rx'
import {BsMoonStarsFill} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [theme,setTheme]=useState('light-theme')
  const [search,setSearch]=useState('')
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
    <div className="navbar flex justify-between  pr-12 pl-12 pt-10 border-b-2 border-sky-900 border-solid items-center shadow-xl shadow-black-900 items-center">
      <div className="icon ">
        <Link to='/'><h1 className=" text-4xl font-bold     ">
            The Quran
        </h1></Link>
      </div>
      <div className="search li  flex mb-2 items-center justify-between border-4  border-solid rounded-lg">
        <input type="text" placeholder="Search" className=" outline-none p-3 m-1"/>
        <FaSearch className="text-3xl cursor-pointer  rounded-lg ml-2" onChange={event=>setSearch(event.target.value)}/>
      </div>
      <div className="list">
        <ul className="flex items-center">
            <li className=' flex justify-between'>
            <li className="li text-3xl font-bold mr-6   ">
                <Link to="/">Home</Link>
            </li>
            <li className="li text-3xl font-bold mr-6   ">
                <Link to="/about">About</Link>
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
