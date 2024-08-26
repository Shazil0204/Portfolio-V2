import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  FaJs,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMicrosoftsqlserver, SiCsharp, SiMysql } from "react-icons/si";

export const Skill = () => {
  return (
    <>
      <div className="w-full p-1 bg-black/25"></div>
      <div className="min-h-screen w-full flex flex-col font-edu-vic lg:px-20 p-2 drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <div className="xl:flex flex-grow mt-16 gap-2 space-y-2 xl:space-y-0 md:text-xl xl:text-2xl ">
          <div className="order-1 xl:order-2 w-full flex-grow p-2 text-justify">
            <h1 className="left-0 w-full text-center text-4xl font-bold">
              Core Skills and Expertise
            </h1>
            <p className="mt-10">
              "As a 20-year-old full-stack developer currently studying in
              Denmark, I have gained a solid foundation and practical experience
              in a diverse range of programming languages, frameworks, and
              tools. Here’s a breakdown of my technical skills, categorized by
              my confidence and experience level."
            </p>
            <h2 className="mt-10 font-bold">Highly Proficient:</h2>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 mt-5">
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <BiLogoTailwindCss className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">
                  TAILWIND CSS
                </h3>
                <p className="font-mono h-2/5">
                  Expert in creating modern, responsive UI designs with Tailwind
                  CSS
                </p>
              </div>
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <SiMysql className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">MYSQL</h3>
                <p className="font-mono h-2/5">
                  Strong command of database management, design, and
                  optimization using MySQL
                </p>
              </div>
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <SiMicrosoftsqlserver className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">MSSQL</h3>
                <p className="font-mono h-2/5">
                  Experienced in managing and querying databases with MSSQL
                </p>
              </div>
            </div>
            <h2 className="mt-10 font-bold">
              Proficient, but Continuously Learning:
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 mt-5">
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <SiCsharp className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">C#</h3>
                <p className="font-mono h-2/5">
                  Extensive experience developing applications in C#, though I
                  am always seeking to deepen my understanding of advanced
                  concepts and best practices
                </p>
              </div>
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <FaJs className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">JS</h3>
                <p className="font-mono h-2/5">
                  Worked on numerous projects involving JavaScript, continuously
                  exploring more advanced patterns and techniques.
                </p>
              </div>
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <FaReact className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">ReactTSX</h3>
                <p className="font-mono h-2/5">
                  Skilled in building dynamic user interfaces with ReactTSX,
                  with a focus on TypeScript for better type safety, while
                  actively learning more advanced patterns
                </p>
              </div>
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <SiDotnet    className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">ASP.NET</h3>
                <p className="font-mono h-2/5">
                  Significant experience building web applications with ASP.NET,
                  always striving to learn more.
                </p>
              </div>
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <FaHtml5 className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">HTML</h3>
                <p className="font-mono h-2/5">Strong foundation in HTML.</p>
              </div>
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <FaCss3 className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">CSS</h3>
                <p className="font-mono h-2/5">
                  Strong foundation in CSS, with ongoing learning to master
                  complex layouts and responsive design principles
                </p>
              </div>
            </div>
            <h2 className="mt-10 font-bold">Competent:</h2>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 mt-5">
              <div className="flex flex-col text-center justify-center border-2 border-white/25 bg-white/25 rounded-lg gap-4 py-5 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] hover:scale-105 hover:text-green-500 hover:-rotate-6 duration-100">
                <div className="h-2/5">
                  <FaBootstrap className="w-full mb-3 h-32 p-4" />
                </div>
                <h3 className="underline underline-offset-2 h-1/5">
                  Bootstrap CSS
                </h3>
                <p className="font-mono h-2/5">
                  Comfortable using Bootstrap to quickly prototype responsive
                  web applications, with a good grasp of its grid system and
                  component library
                </p>
              </div>
            </div>
            <h2 className="mt-10 font-bold">Visual Proficiency Indicators:</h2>
            <div className="space-y-5 mt-5">
              <div className="flex gap-5">
                <p>Tailwind CSS, MySQL, MSSQL: </p>
                <div className="flex text-green-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
              </div>
              <div className="flex gap-5">
                <p>C#, JavaScript, ReactTSX, ASP.NET, HTML/CSS: </p>
                <div className="flex text-green-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <div className="flex gap-5">
                <p>Bootstrap: </p>
                <div className="flex text-green-200">
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
