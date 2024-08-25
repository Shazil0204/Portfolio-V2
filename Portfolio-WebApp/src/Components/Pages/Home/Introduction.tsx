import "../../Styles/GradientText.css";

export const Introduction = () => {
  return (
    <h1>
      HI, I'M{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        SHAZIL SHAHID
      </span>{" "}
      <br />A
      <div className="gradientText">
        <div className="job" data-job1="{FRONTEND}" data-job2="{BACKEND}"></div>
      </div>
      <br />
      DEVELOPER
    </h1>
  );
};
