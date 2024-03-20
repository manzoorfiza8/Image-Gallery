import React from 'react'
import Navbar from '../Components/Navbar'
import p1 from '../assets/p1.jpg'
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';
import Theme from '../Components/Theme'

export default function Home() {
  return (
      <>
           <Navbar/>   
           {/* <div className={`${window.className} 
      dark:bg-medium`> */}
      <div>
        <div className="flex">
         {/* Left side with text area for name and introduction */}
<div className="flex flex-col justify-center pl-24 pb-4 pt-48 pr-8">
  <h1 className="text-2xl font-bold mb-1">Fiza Manzoor</h1>
  <h1 className="text-6xl font-bold mb-1 extra-bold">Front-End Developer</h1>
  <h1 className="text-6xl font-bold mb-2">& Web Designer</h1>
  <p className="text-base text-5l">
    A Passionate front-end developer dedicated to implementing innovative designs,
    <br></br>
    transforming ideas into captivating web experiences
  </p>
  <div className='flex pl-6 pt-4 text-lg'>
  <a href='#' className='mr-12'><BsInstagram /></a>
  <a href='#' className='mr-12'><FaGithub /></a>
  <a href='#' className='mr-12'><BsLinkedin /></a>
  <a href='#'><BsTwitter /></a>
</div>
<div className="flex flex-1 px-4 py-7 pl-0 pr-84 mr-16 pt-28 justify-end">
            <Theme />
          </div>
</div>


          {/* Right side with the image */}
          <img
            src={p1}
            alt="Alt Text"
            className="absolute bottom-66 right-72 h-523 w-600 pt-44 mt-86 pt-55 pr-55"
          />
        </div>
      </div>

    </>
  )
}

// import React from "react";
// import hero from "../assets/p1.jpg";
// import Navbar from '../Components/Navbar'
// const Home = () => {
//   const social_media = [
//     "logo-instagram",
//     "logo-facebook",
//     "logo-linkedin",
//     "logo-twitter",
//   ];
//   return (
//     <> 
//     <Navbar />
//     <section
//       id="home"
//       className="min-h-screen flex py-10 md:flex-row flex-col items-center"
//     >
//       <div className="flex-1 flex items-center justify-center h-full">
//         <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
//       </div>
//       <div className="flex-1">
//         <div className="md:text-left text-center">
//           <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
//             <span className="text-cyan-600 md:text-6xl text-5xl">
//               Hello!
//               <br />
//             </span>
//             My Name is <span>John Alex</span>
//           </h1>
//           <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
//             Fullstack Developer
//           </h4>
//           <button className="btn-primary mt-8">Contact Me</button>
//           <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
//             {social_media?.map((icon) => (
//               <div
//                 key={icon}
//                 className="text-gray-600 hover:text-white cursor-pointer "
//               >
//                 <ion-icon name={icon}></ion-icon>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default Home;