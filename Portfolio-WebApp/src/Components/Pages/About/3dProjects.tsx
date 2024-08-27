import "../../Styles/Project3d.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import {
  SiCsharp,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiMysql,
  SiDotnet,
} from "react-icons/si";
import "../../Styles/Slider.css"; // Import your slider CSS file if needed

const icons = [
  {
    Component: SiCsharp,
    link: "https://github.com/Shazil0204/H1-Programmering",
    color: "text-green-600",
  }, // C# icon with green color
  {
    Component: FaHtml5,
    link: "https://github.com/Shazil0204/Portfolio-V2",
    color: "text-red-600",
  }, // HTML5 icon with red color
  {
    Component: FaCss3Alt,
    link: "https://github.com/Shazil0204/CSS-Only",
    color: "text-blue-600",
  }, // CSS3 icon with blue color
  {
    Component: FaJs,
    link: "https://github.com/Shazil0204/H2-JavaScript",
    color: "text-yellow-400",
  }, // JavaScript icon with yellow color
  {
    Component: FaReact,
    link: "https://github.com/Shazil0204/Portfolio-V2",
    color: "text-blue-400",
  }, // React icon with light blue color
  {
    Component: SiDotnet,
    link: "https://github.com/Shazil0204/Nordic-Nest",
    color: "text-purple-600",
  }, // .NET icon with purple color
  {
    Component: SiTailwindcss,
    link: "https://github.com/Shazil0204/Portfolio-V2",
    color: "text-blue-300",
  }, // Tailwind CSS icon with cyan color
  {
    Component: SiMicrosoftsqlserver,
    link: "https://github.com/Shazil0204/Nordic-Nest",
    color: "text-red-800",
  }, // MSSQL icon with dark red color
  {
    Component: SiMysql,
    link: "https://github.com/Shazil0204/Nordic-Nest",
    color: "text-blue-500",
  }, // MySQL icon with blue color
  {
    Component: FaBootstrap,
    link: "https://github.com/Shazil0204/Nordic-Nest",
    color: "text-purple-800",
  }, // Bootstrap icon with dark purple color
];

function ThreeDProject() {
  const sliderStyle = {
    "--quantity": icons.length,
  } as React.CSSProperties;

  const itemStyles = icons.map(
    (_, index) =>
      ({
        "--position": index + 1,
      } as React.CSSProperties)
  );

  return (
    <>
      <div className="w-full p-1 bg-black/25"></div>
      <div className="banner3D bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute top-5 z-10 text-center w-full">
          <span className="drop-shadow-[0_5px_5px_rgba(0,0,0,1)] text-4xl font-edu-vic font-bold ">
            Projects{" "}
          </span>
        </div>
        <div className="slider3D mt-10" style={sliderStyle}>
          {icons.map((icon, index) => (
            <div
              key={index}
              className="item3D flex justify-center items-center"
              style={itemStyles[index]}
            >
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center items-center"
              >
                <icon.Component className={`${icon.color} w-full h-full`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ThreeDProject;
