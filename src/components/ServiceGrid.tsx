import Image from "next/image";
import React from "react";

const ServiceGrid = () => {
  return (
    <div className="p-4 bg-orange-100">
      <div>
        <h1 className="font-bold text-2xl  md:text-5xl text-center mb-8 md:text-left mx-4 md:ml-40">
          OUR BEST SERVICES
        </h1>
      </div>
      <div className="sm:ml-40 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col ">
            <div className="md:mt-5">
              <div className="w-75 h-100 bg-gray-800 rounded-lg shadow-md p-3">
                <Image
                  src={"/AirCompresorServices.png"}
                  width={310}
                  height={389}
                  className="w-full mb-1"
                  alt="img"
                />
                <h1 className="  text-md md:text-2xl text-center text-white">
                  Air Compressors Services
                </h1>
              </div>
            </div>
            <div>
              <div className="w-75 h-100  bg-gray-800 rounded-lg shadow-md p-3 mt-10">
                <Image
                  src={"/Knowledgehub.png"}
                  width={310}
                  height={389}
                  className="w-full mb-1"
                  alt="img"
                />

                <h1 className="text-md md:text-2xl text-center text-white">
                  Knowledge Hub
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="w-75 h-100 bg-gray-800 rounded-lg shadow-md p-3 mt-10 md:mt-50 md:ml-20 ">
              <Image
                src={"/ServiceImg.png"}
                width={310}
                height={389}
                className="w-full mb-1"
                alt="img"
              />

              <h1 className="text-md md:text-2xl text-center text-white">
                Service , Repair & Parts
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-10">
            <h1 className="mb-5 font-bold md:max-w-2xl md:mb-50 md:mr-70  sm:text-md md:text-xl lg:text-xl  text-center">
              "OUR COMPREHENSIVE SOURCE FOR ADVANCED AIR COMPRESSORS, SERVICES
              AND SOLUTIONS - POWERING INDUSTRIES WITH INNOVATION, EFFICIENCY
              AND EXPERTISE"
            </h1>

            <div className="p-4 flex flex-col md:flex-row">
              <div className="w-75 h-100 bg-gray-800 rounded-lg shadow-md p-3  ">
                <Image
                  src={"/IndustrialAppimg.png"}
                  width={310}
                  height={389}
                  className="w-full mb-1"
                  alt="img"
                />

                <h1 className="text-md md:text-2xl text-center text-white">
                  Industrial Applications
                </h1>
              </div>
              <div className="card2">
                <div className="w-75 h-100 md:ml-20 md:mt-20 bg-gray-800 rounded-lg shadow-md p-3 mt-10 ">
                  <Image
                    src={"/Ancillaryproducts.png"}
                    width={310}
                    height={389}
                    className="w-full mb-1"
                    alt="img"
                  />

                  <h1 className="text-md md:text-2xl text-center text-white">
                    Ancillary Products
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ServiceGrid;
