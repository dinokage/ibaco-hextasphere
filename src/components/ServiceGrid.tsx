import Image from "next/image";
import React from "react";

const ServiceGrid = () => {
  return (
    <div>
      <div className="p-4 bg-orange-100">
        <h1 className="text-5xl ml-40 ">OUR BEST SERVICES</h1>
        <div className="ml-40 flex justify-between items-center">
          <div className="flex mt-10">
            <div>
              <div className="w-75 h-100 bg-gray-800 rounded-lg shadow-md p-4">
                <Image
                  src={"/AirCompresorServices.png"}
                  width={310}
                  height={389}
                  className="w-full"
                  alt="img"
                />
                <h1 className="text-2xl text-center text-white">
                  Air Compressor Services
                </h1>
              </div>
              <div className="w-75 h-100  bg-gray-800 rounded-lg shadow-md p-4 mt-18">
                <Image
                  src={"/Knowledgehub.png"}
                  width={310}
                  height={389}
                  className="w-full"
                  alt="img"
                />

                <h1 className="text-2xl text-center text-white">
                  Knowledge Hub
                </h1>
              </div>
            </div>
            <div>
              <div className="w-75 h-100 bg-gray-800 rounded-lg shadow-md p-4 mt-50 ml-20">
                <Image
                  src={"/ServiceImg.png"}
                  width={310}
                  height={389}
                  className="w-full"
                  alt="img"
                />

                <h1 className="text-2xl text-center text-white">
                  Service , Repair & Parts
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-3xl ml-20 mr-70">
              <h1 className="text-xl font-bold text-center ">
                "OUR COMPREHENSIVE SOURCE FOR ADVANCED AIR COMPRESSORS, SERVICES
                AND SOLUTIONS - POWERING INDUSTRIES WITH INNOVATION, EFFICIENCY
                AND EXPERTISE"
              </h1>
              <div className="flex">
                <div className="w-75 h-100 bg-gray-800 rounded-lg shadow-md p-4 mt-40 ">
                  <Image
                    src={"/IndustrialAppimg.png"}
                    width={310}
                    height={389}
                    className="w-full"
                    alt="img"
                  />

                  <h1 className="text-2xl text-center text-white">
                    Industrial Applications
                  </h1>
                </div>

                <div className="w-75 h-100 bg-gray-800 rounded-lg shadow-md p-4 mt-60 ml-20">
                  <Image
                    src={"/Ancillaryproducts.png"}
                    width={310}
                    height={389}
                    className="w-full"
                    alt="img"
                  />

                  <h1 className="text-2xl text-center text-white">
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
