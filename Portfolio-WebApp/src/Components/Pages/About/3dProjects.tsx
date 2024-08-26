import "../../Styles/Project3d.css";

// Define the list of image sources with corresponding GitHub links
const images = [
  {
    src: "./Skills IMG/csharp.svg",
    link: "https://github.com/yourusername/repo1",
  },
  {
    src: "./Skills IMG/HTML5.svg",
    link: "https://github.com/yourusername/repo2",
  },
  {
    src: "./Skills IMG/CSS3.svg",
    link: "https://github.com/yourusername/repo3",
  },
  {
    src: "./Skills IMG/tailwind.svg",
    link: "https://github.com/yourusername/repo4",
  },
  { src: "./Skills IMG/js.svg", link: "https://github.com/yourusername/repo5" },
  {
    src: "./Skills IMG/React.svg",
    link: "https://github.com/yourusername/repo6",
  },
  {
    src: "./Skills IMG/aspnet.svg",
    link: "https://github.com/yourusername/repo7",
  },
  {
    src: "./Skills IMG/mssql.svg",
    link: "https://github.com/yourusername/repo8",
  },
  {
    src: "./Skills IMG/mysql.svg",
    link: "https://github.com/yourusername/repo9",
  },
  {
    src: "./Skills IMG/bootstrap.svg",
    link: "https://github.com/yourusername/repo10",
  },
];

function ThreeDProject() {
  const sliderStyle = {
    "--quantity": images.length,
  } as React.CSSProperties;

  const itemStyles = images.map(
    (_, index) =>
      ({
        "--position": index + 1,
      } as React.CSSProperties)
  );

  return (
    <>
      <div className="w-full p-1 bg-black/25"></div>
      <div className="banner3D">
        <div className="absolute top-5 z-10 text-center w-full">
          <span className="box-border bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg drop-shadow-[0_5px_5px_rgba(0,0,0,1)] text-4xl font-edu-vic font-bold hover:px-20 hover:border-green-500 hover:text-green-500 duration-300 p-2">
            Projects{" "}
          </span>
        </div>
        <div className="slider3D mt-10" style={sliderStyle}>
          {images.map((image, index) => (
            <div key={index} className="item3D" style={itemStyles[index]}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={`Project ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ThreeDProject;
