import ThreeDProject from "./3dProjects";
import { InfinitySlider } from "./InfinitySlider";
import { Skill } from "./Skill";

export const About = () => {
  return (
    <>
      <div className="w-full p-1 bg-black/25"></div>
      <div className="min-h-screen w-full flex flex-col p-2 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="xl:flex flex-grow mt-16 gap-2 space-y-2 xl:space-y-0 md:text-xl xl:text-2xl ">
          <div className="order-1 xl:order-2 w-full xl:w-3/ 5 flex-grow p-2 text-justify">
            <div className="left-0 w-full text-center font-edu-vic text-4xl drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
              About me
            </div>
            <div className="mt-5">
              Ever wondered what it's like to turn curiosity into code? Hi, I’m
              {"  "}
              <strong className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
                Shazil Shahid
              </strong>
              , a 20-year-old full-stack programming student based in Denmark.
              My journey into the world of programming started with a simple
              question: What if I could create anything I imagined? That
              question led me to discover the power of code, and I’ve been
              hooked ever since
            </div>
            <div className="flex gap-2">
              <div className="w-3/4 rounded-full my-2 p-[0.1rem] bg-gradient-to-r from-black to-[#0c4b54]"></div>
            </div>
            <div>
              As a student, I’ve had the opportunity to explore a wide range of
              technologies, including front-end development with React (using
              TSX) and backend development with ASP.NET Core. I’m passionate
              about learning and have dedicated countless hours to understanding
              the ins and outs of full-stack development.
            </div>
            <div className="flex gap-2">
              <div className="w-3/4 rounded-full my-2 p-[0.1rem] bg-gradient-to-r from-black to-[#0c4b54]"></div>
            </div>
            <div className="xl:flex w-full gap-5 mt-5 text-justify">
              <div className="flex-1">
                <div className="flex">
                  <div className="w-full rounded-full my-2 p-[0.1rem] bg-gradient-to-r from-black to-white/25"></div>
                </div>
                <div className="uppercase p-2 font-edu-vic text-center font-extrabold">
                  Academic Achievements
                </div>
                <div className="font-serif">
                  I recently completed H2 at ZBC Ringsted, achieving A great
                  result. This reflects my dedication to learning and applying
                  complex concepts effectively. {" "}
                  <a
                    href="./H2-result.pdf"
                    download
                    className="w-full my-5 font-bold uppercase underline underline-offset-2"
                  >
                    see my result for H2
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex">
                  <div className="w-full rounded-full my-2 p-[0.1rem] bg-gradient-to-r from-white/25 to-white/25"></div>
                </div>
                <div className="uppercase p-2 font-edu-vic text-center font-extrabold">
                  Reliability and Consistency
                </div>
                <div className="font-serif">
                  Throughout my studies, I’ve learned the value of reliability.
                  Although I faced some challenges and had a brief absence due
                  to [reason, e.g., "health reasons" or "family obligations"], I
                  remained committed to my work and maintained high standards.
                  This experience taught me resilience and effective time
                  management.
                </div>
              </div>
              <div className="flex-1">
                <div className="flex ">
                  <div className="w-full rounded-full my-2 p-[0.1rem] bg-gradient-to-r from-white/25 to-black"></div>
                </div>
                <div className="uppercase p-2 font-edu-vic text-center font-extrabold">
                  Problem-Solving/Adaptability
                </div>
                <div className="font-serif">
                  Problem-solving is central to my role as a full-stack
                  developer. Whether working with React (TSX) on the front-end
                  or ASP.NET Core on the back-end, I tackle challenges with
                  creativity and adaptability. I thrive in dynamic environments
                  and enjoy finding solutions to complex issues.
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 flex justify-center xl:order-1 w-full xl:w-2/5 flex-grow">
            <img
              src="./vite.svg"
              className="h-[32rem] xl:h-full w-auto p-2"
              alt=""
            />
          </div>
        </div>
      </div>
      <Skill />
      <InfinitySlider />
      <ThreeDProject />
    </>
  );
};
