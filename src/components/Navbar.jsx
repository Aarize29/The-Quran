import { useState, useEffect } from 'react'
import {FiSun} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {RxDividerVertical} from 'react-icons/rx'
import {BsMoonStarsFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [theme,setTheme]=useState('light-theme')
  const [isNavOpen,setIsNavOpen]=useState(false)
  const handleNav = () => {
    setIsNavOpen(!isNavOpen)
  }
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
    <div className="navbar flex justify-between w-full pr-10 lg:pl-12 pt-10 border-b-2 border-sky-900 border-solid items-center shadow-xl text-1xl lg:text-3xl md:text-2xl shadow-black-900 items-center">
      <div className="icon ">
        <Link to='/'><h1 className="  font-bold  mr-2   ">
            Quran
        </h1></Link>
      </div>
      

      <div className="list">
        <ul className="flex items-center">
            <li className=' flex justify-between'>
            <li className="li  font-bold mr-6  ">
                <Link to="/home">Home</Link>
            </li>
            <li className="li  font-bold mr-6 ">
                <Link to="/about">About</Link>
            </li>
            </li>
            <li className=" li  font-bold mr-6 text-gray-400"><RxDividerVertical/></li>
            <li className='flex justify-between'>
            <li className="li  font-bold mr-6    cursor-pointer" onClick={handledarkmode}>
              {darkMode ? <FiSun/> : <BsMoonStarsFill/>}
            </li>
            <li className="li  font-bold mr-6   ">
              <a href="https://github.com/Aarize29/The-Quran"><BsGithub/></a>
            </li>
             {/* <li className="li lg:hidden lg:text-3xl font-bold mr-6 " onClick={handleNav}>
             {isNavOpen?<GiHamburgerMenu/>:<AiOutlineClose/>} 
            </li>  */}
            </li>

        </ul>

      </div>
    </div>
  )
}

export default Navbar
