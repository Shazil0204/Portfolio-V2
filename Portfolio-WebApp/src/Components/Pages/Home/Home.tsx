import { Link } from "react-scroll";
import { Greeting } from "./Greeting";
import { Introduction } from "./Introduction";
import { Portfolio_Overview } from "./Portfolio_Overview";

// I will make this flex
const Home = () => {
  const SmoothSrollContact = "Contact";

  return (
    <>
      <div className="font-new-amsterdam text-2xl pt-20 lg:p-20 drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <div className="w-full text-center lg:text-4xl underline underline-offset-2">
          <Greeting />
        </div>
        <div className="md:flex w-full min-h-screen">
          <div className="w-full md:w-1/2 text-center pt-10 space-y-10">
            <div className="text-6xl">
              <Introduction />
            </div>
            <div className="text-justify text-lg lg:text-4xl p-4">
              <Portfolio_Overview />
            </div>
            <div className="w-lvw md:w-full flex justify-evenly mx-auto">
              <button className="w-1/3 h-12 bg-white/30 border border-white/50 rounded-lg ">
                <Link to={SmoothSrollContact} smooth={true} duration={500}>
                  {SmoothSrollContact.charAt(0).toUpperCase() +
                    SmoothSrollContact.slice(1)}
                </Link>
              </button>
              <a
                href="./Shazil_Shahid_Resume.pdf"
                download
                className="w-1/3 h-12 bg-white/30 border border-white/50 rounded-lg flex justify-center items-center"
              >
                Download my CV
              </a>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 flex 2xl:block">
            <img src="./vite.svg" className="w-full h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
