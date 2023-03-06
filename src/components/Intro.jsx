import React from 'react'
import kaabaBackground from './kaaba-background.jpg';
import {Link} from 'react-router-dom'
const Intro = () => {
  return (
    <div>
    <div
      className="bg-gray-100 min-h-screen flex items-center justify-center"
     
    >
      <div className="max-w-5xl w-full px-6 py-12 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNhN8ovMVshENtCvvaIDmbV1gGoFC4A-buxa_eVIbyg&s" className="h-32 mx-auto md:mx-0" alt="Quran Translation" />
          <h1 className="text-4xl font-bold text-gray-800 mt-6 text-center md:text-left">
            Welcome to Quran Translation
          </h1>
          <p className="text-lg text-gray-600 mt-4 text-center md:text-left">
            Discover the beauty and wisdom of the Quran through our English translations.
          </p>
          <Link
            to="/home"
            className="inline-block  bg-[#0c4a6e] hover:bg-[gray] text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 mt-6 mx-auto md:mx-0"
          >
            Read the Quran
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img src={kaabaBackground} alt="Kaaba" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
     
    </div>
  )
}

export default Intro
