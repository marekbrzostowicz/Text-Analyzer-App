import { IoContractSharp } from "react-icons/io5";
// import { LuSunMedium } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <header className="flex flex-col">
        <div className="flex items-center justify-between mt-4 px-6 md:mt-8 md:px-32">
          <a href="/" className="flex items-center gap-2 text-white">
            <IoContractSharp size={40} className="text-violet-500" />
            <span className="text-2xl font-semibold">Character Counter</span>
          </a>
          {/* <button className="bg-zinc-700 p-2 rounded-xl hover:bg-slate-600">
            <LuSunMedium size={30} className="text-white" />
          </button> */}
        </div>
      </header>
      <main>
        <div className="text-white mt-12 text-center  max-w-2xl mx-auto ">
          <p className="text-5xl leading-tight font-bold md:text-7xl">
            Analyze your text in real-time.
          </p>
        </div>
      </main>
    </>
  );
};

export default Header;
