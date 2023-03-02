import { Link } from 'react-router-dom'
import './Card.css'
import Page from './Page'
const Card = (props) => {
  return (
    <div  className= " card max-w-sm rounded overflow-hidden shadow-xl shadow-gray-700 m-5 cursor-pointer hover:shadow-gray-900">
  <img  className= "w-full h-[65%]" src="https://c8.alamy.com/comp/2FYTYNN/the-name-of-surah-of-the-holy-quran-surah-al-fatihah-translation-chapter-the-opener-arabic-calligraphy-greeting-card-2FYTYNN.jpg" alt="Sunset in the mountains"/>
  <div  className= "px-6 py-4">
    <div  className= "font-bold text-xl text-right mb-2">{props.name}</div>
    <div  className= "font-bold text-xl mb-2">{props.englishName}</div>
    <p  className= "   text-base">
     Meaning:- {props.englishNameTranslation}
    </p>
  </div>
  <div className='text-center mb-2'>

    <Link to='/page'><button className='bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Read</button></Link>
  </div>
</div>
  )
}

export default Card
