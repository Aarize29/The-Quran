import {FiSun} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className="flex justify-between mr-12 ml-12 mt-10">
      <div className="">
        <h1 className="text-4xl font-bold  text-[#0c4a6e]">
            The Quran
        </h1>
      </div>
      <div className="list">
        <ul className="flex">
            <li className=" text-3xl font-bold mr-6 text-[#0c4a6e]">
                <a href="/">Home</a>
            </li>
            <li className="text-3xl font-bold mr-6 text-[#0c4a6e]">
                <a href="/about">About</a>
            </li>
            <li className="text-3xl font-bold mr-6 text-[#0c4a6e]">
              <FiSun/>
            </li>
            <li className="text-3xl font-bold mr-6 text-[#0c4a6e]">
              <a href=""><BsGithub/></a>
            </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
