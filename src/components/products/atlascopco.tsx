import Image from "next/image";
import React from "react";

const Productpage = () => {
  return (
    <div className="m-10 bg-yellow-50 p-10  ">
      <h1 className="text-black text-4xl m-10 font-bold">PRODUCTS</h1>
      <div className="flex justify-center">
        <div className="flex items-center justify-center h-full ">
          <div className="w-40 h-40 bg-sky-900 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transform rotate-[-18deg]">
            <p className="transform rotate-[18deg]  text-lime-50 text-xl w-8  mr-10">
              Atlas Capco
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full  ">
          <div className="w-40 h-40 bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transform rotate-[-18deg]">
            <p className="transform rotate-[18deg]   text-lime-50 text-xl w-8 mr-10">
              SEW Eurodrive{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full ">
          <div className="w-40 h-40 bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transform rotate-[-18deg]">
            <p className="transform rotate-[18deg]   text-lime-50 text-xl w-8 mr-10">
              Kirloskar{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full ">
          <div className="w-40 h-40   bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transform rotate-[-18deg]">
            <p className="transform rotate-[18deg]   text-lime-50 text-xl w-8 mr-10">
              Danfoss Drives{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full ">
          <div className="w-40 h-40 bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transform rotate-[-18deg]">
            <p className="transform rotate-[18deg] text-center  text-lime-50 text-xl w-8 mr-10">
              Symphony Air Coolers{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full ">
          <div className="w-40 h-40 bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transform rotate-[-18deg]">
            <p className="transform rotate-[18deg]   text-lime-50 text-xl w-8 mr-10">
              Snap on Tools{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full ">
          <div className="w-40 h-40 bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transform rotate-[-18deg]">
            <p className="transform rotate-[18deg]   text-lime-50 text-xl w-8 mr-10">
              Praj Hipurity Systems
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full ">
          <div className="w-40 h-40 bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transform rotate-[-18deg]">
            <p className="transform rotate-[18deg]   text-lime-50 text-xl w-8 mr-10">
              Nilfisk
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full ">
          <div className="w-40 h-40 bg-gray-700 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center transform rotate-[-18deg]">
            <p className="transform rotate-[18deg]   text-lime-50 text-xl w-8 mr-10">
              WEG Motors
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <div>
          <div className="flex items-center justify-center m-10">
            <button className="flex items-center justify-center w-12 h-12  bg-sky-900 rounded-full text-white hover:hover:bg-gray-600 focus:outline-none">
              ←
            </button>

            <Image
              src="/AirDryers.svg"
              alt="My Icon"
              width={100}
              height={100}
              className="h-96 w-96"
            />

            <Image
              src="/GasGenerators.svg"
              alt="My Icon"
              width={100}
              height={100}
              className="h-96 w-96"
            />

            <Image
              src="/AirCompressors.svg"
              alt="My Icon"
              width={100}
              height={100}
              className="h-96 w-96"
            />

            <button className="flex items-center justify-center w-12 h-12 bg-sky-900 rounded-full text-white hover:bg-gray-600 focus:outline-none">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
