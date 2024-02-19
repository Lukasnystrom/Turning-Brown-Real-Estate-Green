import React from "react";
import img from "../assets/404.jpg";

export default function NoPage() {
  return (
    <div className="h-auto flex flex-col md:flex-row items-center justify-center bg-green border-b-2 border-black mt-12">
      <div className="flex flex-col items-start justify-between w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-3">So Sorry!</h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
              The page you are looking for cannot be found
            </h2>
            <ul className="list-disc">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Possible Reasons</h2>
              <li className="text-sm md:text-l mx-12 mb-3">The Address may have been typed incorrectly.</li>
              <li className="text-sm md:text-l mx-12 mb-3">It may be a broken or outdated link.</li>
            </ul>
            <div className="flex mt-10 font-bold justify-center">
              <button className="bg-[#192E43] text-white px-4 py-2 rounded-md mr-4">
                Go Home
              </button>
              <button className=" text-[#192E43] px-4 py-2 rounded-md border-2 border-[#192E43]">
                Help
              </button>
            </div>
          </div>
          <img className="max-h-[700px] object-cover md:max-h-full md:w-1/2" src={img} alt="/" />
        </div>
      </div>
    </div>
  );
}
