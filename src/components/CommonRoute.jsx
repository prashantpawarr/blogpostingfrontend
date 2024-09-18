import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { BackgroundLines } from "../components/ui/background-lines";

const CommonRoute = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);

  const homePage = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="relative">
      <BackgroundLines
        className={`absolute top-0 max-md:top-[-150px] left-0 w-full flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out transform ${
          isFullScreen ? "translate-y-0 h-screen" : "-translate-y-full h-0"
        } z-10`} // Lower z-index for the background
      >
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-sans py-2 sm:py-6 md:py-10 font-bold tracking-tight">
          Welcome to <br /> Blog Posting App
        </h2>
        <p className="max-w-xs sm:max-w-md md:max-w-xl mx-auto text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          A place to read, write, and deepen your understanding
        </p>
        <button
          onClick={homePage}
          className="cursor-pointer bg-black text-white mt-4 px-4 py-3 rounded-lg sm:rounded-xl relative z-20" // Adjusted z-index for the button
        >
          Click Here!
        </button>
      </BackgroundLines>

      <div
        className={`transition-opacity duration-1000 ease-in-out w-full ${
          isFullScreen ? "opacity-0" : "opacity-100"
        } flex flex-col min-h-screen z-0`} // Lower z-index for the main content
      >
        {!isFullScreen && (
          <>
            <Header className="relative z-30" />
            {/* // Ensure header has the highest z-index */}
            <main className="flex-grow">
              <Outlet />
            </main>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default CommonRoute;
