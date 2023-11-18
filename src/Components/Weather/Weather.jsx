import React from "react";

const Weather = () => {
  return (
    <div className="container px-20 my-20">
      <div className="flex">
        <div>
          <div>
            <h2 className="text-xl mt-2 font-normal">Select Date : </h2>
          </div>
          <div className="mt-2">
            <p className="text-xl mt-2 font-normal">High Temperature</p>
            <p className="text-xl mt-2 font-normal">Low Temperature</p>
            <p className="text-xl mt-2 font-normal">Humadity</p>
            <p className="text-xl mt-2 font-normal">Sunrice Time</p>
            <p className="text-xl mt-2 font-normal">Sunsut Time</p>
          </div>
        </div>
        <div className="px-24">
          <div className="flex gap-4">
            <div className="">
              <div className="bg-[#464646]  text-white text-center rounded-xl py-6 px-4">
                <div>
                  <div className="border-b-2 py-3">
                    
                    <h2 className="font-bold text-3xl">Sunny</h2>
                  </div>
                  <p className="text-xl font-normal">23°C / 63°F</p>
                  <p className="text-xl font-normal">17°C / 43°F</p>
                  <p className="text-xl font-normal">76%</p>
                  <p className="text-xl font-normal">06:21 AM</p>
                  <p className="text-xl font-normal">05:53 PM</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#464646]  text-white text-center rounded-xl py-6 px-4">
                <div>
                  <div className="border-b-2 py-3">
                    
                    <h2 className="font-bold text-3xl">Snowy</h2>
                  </div>
                  <p className="text-xl font-bold">23°C / 63°F</p>
                  <p className="text-xl font-bold">17°C / 43°F</p>
                  <p className="text-xl font-bold">76%</p>
                  <p className="text-xl font-bold">06:21 AM</p>
                  <p className="text-xl font-bold">05:53 PM</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#464646]  text-white text-center rounded-xl py-6 px-4">
                <div>
                  <div className="border-b-2 py-3">
                    <h2 className="font-bold text-3xl">Rainy</h2>
                  </div>
                  <p className="text-xl font-bold">23°C / 63°F</p>
                  <p className="text-xl font-bold">17°C / 43°F</p>
                  <p className="text-xl font-bold">76%</p>
                  <p className="text-xl font-bold">06:21 AM</p>
                  <p className="text-xl font-bold">05:53 PM</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#464646]  text-white text-center rounded-xl py-6 px-4">
                <div>
                  <div className="border-b-2 py-3">
                    
                    <h2 className="font-bold text-3xl">Windy</h2>
                  </div>
                  <p className="text-xl font-bold">23°C / 63°F</p>
                  <p className="text-xl font-bold">17°C / 43°F</p>
                  <p className="text-xl font-bold">76%</p>
                  <p className="text-xl font-bold">06:21 AM</p>
                  <p className="text-xl font-bold">05:53 PM</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#464646]  text-white text-center rounded-xl py-6 px-4">
                <div>
                  <div className="border-b-2 py-3">
                    <h2 className="font-bold text-3xl">Rainy</h2>
                  </div>
                  <p className="text-xl font-bold">23°C / 63°F</p>
                  <p className="text-xl font-bold">17°C / 43°F</p>
                  <p className="text-xl font-bold">76%</p>
                  <p className="text-xl font-bold">06:21 AM</p>
                  <p className="text-xl font-bold">05:53 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
