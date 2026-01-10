import { useState } from "react";
import "./App.css";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="bg-[#f5f5f5] py-10 px-5">
        <div className="h-screen">
          {/* NAVIGATOR */}
          <div className="p-5 mb-10  bg-white border border-black/50 rounded-4xl flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full border border-black/50"></div>
              <p className="font-bold uppercase text-[#0B5534]">
                Home economics
              </p>
            </div>
            {/* NAV LINK */}
            {/* BUTTON */}
            {/* BAR */}
            <FontAwesomeIcon icon={faBars} className="text-primary" size="xl" />
          </div>

          {/* HEADING */}
          <div className="bg-red-600 text-white px-5 py-24 rounded-4xl border border-black/10 flex flex-col-reverse gap-20">
            {/* side 1 */}
            <div className="">
              {/* heading */}
              <div className="">
                <h1 className="text-4xl font-bold capitalize">
                  Your health our priority.
                </h1>
                <p className="mt-5">
                  Delivering comprehensive mental health suport through out
                  innovative platform that seamlessly connects your teams.
                </p>
              </div>

              {/* buttons */}
              {/* buttons */}
              <div className="flex gap-3 flex-col mt-10 uppercase">
                <div className="px-5 py-3 border border-black/10 rounded-4xl w-fit flex items-center gap-2 bg-white text-[#074F22]">
                  <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                  <p className="font-medium">Learn more</p>
                </div>
                <div className="px-5 py-3 border bg-[#FFFC5F] text-[#074F22] font-bold border-black/10 rounded-4xl w-fit flex items-center gap-2 shadow-md">
                  Book appointment
                </div>
              </div>

              <div className="bg-white p-5 mt-10 rounded-3xl">
                {/*  */}
                <div className="flex">
                  <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                  <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
                </div>

                {/*  */}
                <p className="uppercase font-medium mt-5">
                  More than 150+ experience doctors around the world
                </p>
              </div>
            </div>

            {/* side 2 */}
            <div className="">
              <div className="mx-auto h-80 bg-green-200 rounded-4xl"></div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="h-[70vh] bg-black"></div>
    </>
  );
}

export default App;
