import './About.css'
import { BsGithub, BsLinkedin, BsYoutube, BsTwitter } from "react-icons/bs";
import Navbar from './Navbar';
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about flex m-5 p-5 text-left flex-col justify-center text-2xl font-bold mt-5 items-center">
      <p className='mb-2'> Assalamu Alaikum Rahmatullahi Barakatuh, everyone!</p>

<p className='mb-2'>My name is Shams Aarize Siddique, and I am the creator of this web application. Thank you for visiting our website, which focuses on providing English translations of the Quran.</p>

<p className='mb-2'>As a Muslim, I understand the importance of being able to understand and reflect upon the message of the Quran, which is why I created this web application to make it easier for people to access the Quranic teachings in a language they are comfortable with.</p>

<p className='mb-2'>Our web application offers a user-friendly interface that allows you to search for specific chapters of the Quran, and also provides video recitations to help you listen and learn the correct pronunciation. I have used videos from a youtube channel called Quran Recitation by Peace Through Understanding, which is one of the most popular channels on youtube for Quran recitations.</p>

<p className='mb-2'>Our goal is to make the Quran accessible to everyone, regardless of their language or background. We believe that the message of the Quran is for all of humanity, and we are committed to promoting a greater understanding and appreciation of its teachings.</p>

<p className='mb-2'>Thank you for visiting our website, and we hope that our web application will be a valuable resource for you in your journey towards greater spiritual enlightenment.</p>
    </div>
    <div className="about flex justify-center  text-3xl">
        <a className='m-4 p-4 hover:text-black' href="https://github.com/Aarize29">
           <h2>
            <BsGithub />
          </h2>
        </a>
        <a className='m-4 p-4 hover:text-black' href="https://www.linkedin.com/in/shams-aarize-6b18a1202/">
          <h2>
            <BsLinkedin />
          </h2>
        </a>
        <a className='m-4 p-4 hover:text-black' href="https://www.youtube.com/@shamsaarize5349">
          <h2>
            <BsYoutube />
          </h2>
        </a>
        <a className='m-4 p-4 hover:text-black' href="https://twitter.com/ShamsAarize">
          <h2>
            <BsTwitter />
          </h2>
        </a>
      </div>
     </>
  )
}

export default About
