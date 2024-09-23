import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { BackgroundLines } from "../components/ui/background-lines";
import { TextGenerateEffect } from "./ui/text-generate-effect";

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
          <TextGenerateEffect
            words={"A place to read, write, and deepen your understanding"}
          />
        </p>
        <button
          onClick={homePage}
          className="relative mt-[25px] z-20 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center  bg-slate-950 px-5 py-3 text-sm font-medium text-white backdrop-blur-3xl">
            Explore!
          </span>
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
