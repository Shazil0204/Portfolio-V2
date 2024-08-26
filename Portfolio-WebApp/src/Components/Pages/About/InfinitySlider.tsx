import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import {
  SiCsharp,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiMysql,
  SiDotnet,
} from "react-icons/si";
import "../../Styles/Slider.css"; // Import your slider CSS file if needed

// Define your icons with their respective Tailwind color classes
const icons = [
  { Component: SiCsharp, color: "text-green-600" }, // C# icon with green color
  { Component: FaHtml5, color: "text-red-600" }, // HTML5 icon with red color
  { Component: FaCss3Alt, color: "text-blue-600" }, // CSS3 icon with blue color
  { Component: FaJs, color: "text-yellow-400" }, // JavaScript icon with yellow color
  { Component: FaReact, color: "text-blue-400" }, // React icon with light blue color
  { Component: SiDotnet, color: "text-purple-600" }, // .NET icon with purple color
  { Component: SiTailwindcss, color: "text-blue-300" }, // Tailwind CSS icon with cyan color
  { Component: SiMicrosoftsqlserver, color: "text-red-800" }, // MSSQL icon with dark red color
  { Component: SiMysql, color: "text-blue-500" }, // MySQL icon with blue color
  { Component: FaBootstrap, color: "text-purple-800" }, // Bootstrap icon with dark purple color
];

export const InfinitySlider = () => {
  const sliderStyle = {
    "--width": "250px",
    "--height": "250px",
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
      <main>
        <div className="slider" style={sliderStyle}>
          <div className="list">
            {icons.map(({ Component, color }, index) => (
              <div key={index} className="item" style={itemStyles[index]}>
                {/* Render the icon with Tailwind color */}
                <Component className={`text-5xl ${color}`} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
