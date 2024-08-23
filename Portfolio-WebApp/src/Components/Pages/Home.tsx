const Home = () => {
  return (
    <>
      <div className="pt-16"></div>
      <div className="w-full min-h-screen flex flex-col md:grid md:grid-cols-12 grid-rows-12 gap-10 md:gap-0">
        <div className="flex-none col-start-2 col-span-10 w-full bg-yellow-700 p-4 min-h-[4rem]">
          Greeting
        </div>
        <div className="flex-none md:col-start-2 md:row-start-3 md:col-span-4 md:row-span-4 w-full bg-red-700 p-4 min-h-[15rem] md:h-full">
          my welcome text
        </div>
        <div className="flex-none md:col-start-2 md:row-start-8 md:col-span-4 md:row-span-2 w-full bg-green-700 p-4 min-h-[10rem]  md:h-full">
          a small intro about my portfolio
        </div>
        <div className="flex-none md:col-start-2 md:row-start-11 md:col-span-10 md:row-span-1 w-full bg-blue-700 p-4 min-h-[5rem]  md:h-full">
          contact and about me button
        </div>
        <div className="flex-none md:col-start-7 md:row-start-3 md:col-span-5 md:row-span-7 w-full bg-black p-4 min-h-[30rem]  md:h-full">
          this will have my image
        </div>
      </div>
    </>
  );
};

export default Home;
