import { useState } from "react";
import "./App.css";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      {/* LANDING */}
      <div className="bg-[#f5f5f5] py-10 px-5">
        <div className="h-PENDING-screen">
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
          <div className="bg-black text-white px-5 py-24 rounded-4xl border border-black/10 flex flex-col-reverse gap-20">
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
              <div className="flex gap-3 flex-col mt-10 uppercase">
                <div className="px-5 py-3 border border-black/10 rounded-4xl w-fit flex items-center gap-2 bg-white text-[#074F22]">
                  <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                  <p className="font-medium">Learn more</p>
                </div>
                <div className="px-5 py-3 border bg-[#FFFC5F] text-[#074F22] font-bold border-black/10 rounded-4xl w-fit flex items-center gap-2 shadow-md">
                  Book appointment
                </div>
              </div>

              {/* stats */}
              <div className="bg-white p-5 mt-10 rounded-3xl text-black">
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
              <div className="mx-auto h-80 bg-white/10 rounded-4xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="py-20 px-5 flex flex-row justify-center items-center text-center gap-4">
        {/* item */}
        <div className="">
          <h2 className="text-5xl mb-3">89</h2>
          <p className="font-medium uppercase">patients</p>
        </div>

        <div className="h-7 w-0.5 bg-black"></div>

        {/* item */}
        <div className="">
          <h2 className="text-5xl mb-3">89</h2>
          <p className="font-medium uppercase">patients</p>
        </div>

        <div className="h-7 w-0.5 bg-black"></div>

        {/* item */}
        <div className="">
          <h2 className="text-5xl mb-3">89</h2>
          <p className="font-medium uppercase">patients</p>
        </div>
      </div>

      {/* FEAUTURES */}
      <div className="py-40 px-5 bg-green-900">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-3xl font-medium text-white text-center">
            High quality care for over 48 years
          </h2>
          {/* border */}
          <div className="w-4/12 mx-auto h-2 rounded-full bg-yellow-300 mt-10"></div>
        </div>

        {/* parent */}
        <div className="mt-20 flex gap-10 flex-col">
          {/* item */}
          <div className="bg-[#f5f5f5] rounded-xl p-2 border border-black/20 w-10/12 mx-auto">
            <div className="bg-white min-h-56 rounded-xl border border-black/20 py-10">
              {/* image */}
              <div className="w-30 h-30 rounded-lg border bg-[#f5f5f5] border-black/20 mx-auto  "></div>
              {/* heading */}
              <div className="text-center mt-10">
                <h3 className="text-2xl font-medium">100% free</h3>
                <p className="mt-2 w-10/12 mx-auto text-sm font-light">
                  majonders majubis ano shala ganders makyonget
                </p>
              </div>
            </div>
          </div>

          {/* item */}
          <div className="bg-[#f5f5f5] rounded-xl p-2 border border-black/20 w-10/12 mx-auto">
            <div className="bg-white min-h-56 rounded-xl border border-black/20 py-10">
              {/* image */}
              <div className="w-30 h-30 rounded-lg border bg-[#f5f5f5] border-black/20 mx-auto  "></div>
              {/* heading */}
              <div className="text-center mt-10">
                <h3 className="text-2xl font-medium">100% free</h3>
                <p className="mt-2 w-10/12 mx-auto text-sm font-light">
                  majonders majubis ano shala ganders makyonget
                </p>
              </div>
            </div>
          </div>

          {/* item */}
          <div className="bg-[#f5f5f5] rounded-xl p-2 border border-black/20 w-10/12 mx-auto">
            <div className="bg-white min-h-56 rounded-xl border border-black/20 py-10">
              {/* image */}
              <div className="w-30 h-30 rounded-lg border bg-[#f5f5f5] border-black/20 mx-auto  "></div>
              {/* heading */}
              <div className="text-center mt-10">
                <h3 className="text-2xl font-medium">100% free</h3>
                <p className="mt-2 w-10/12 mx-auto text-sm font-light">
                  majonders majubis ano shala ganders makyonget
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BANNER */}
      <div className="px-5 py-14">
        <div className="border rounded-lg px-5 py-14 flex flex-wrap-reverse gap-10">
          {/* side 1 */}
          <div className="">
            <h2 className="text-3xl font-semibold">
              Healthier treatments for our patients
            </h2>
            <p className="mt-5 font-light">
              cheapangga majonders majubis ano shala ganders makyonget waz biway
              mashumers ng dites juts at nang jongoloids jowabella sudems at
              ang.
            </p>

            {/* btn */}
            <div className="px-10 py-3 bg-yellow-300 uppercase font-semibold rounded-full w-fit mt-10">
              see more
            </div>
          </div>
          {/* side 2 */}
          <div className="w-full">
            <div className="w-full h-48 border rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* LIST DOCTORS */}
      <div className="border border-black/10 bg-[#f5f5f5] px-5 py-40">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-3xl font-medium text-center">Meet our doctors</h2>
          {/* border */}
          <div className="w-4/12 mx-auto h-3 rounded-full bg-yellow-300 mt-10"></div>
          {/* paragraph */}
          <p className="mt-10">
            mahogany na jutay na ang ano shonget lorem ipsum mahogany na jutay
            na ang ano shonget lorem ipsum
          </p>
        </div>

        {/* parent */}
        <div className="mt-20 grid grid-cols-2 gap-2">
          {/* item */}
          <div className="border border-black/10 rounded-lg bg-white p-2">
            {/* image */}
            <div className="h-52 bg-gray-200 rounded-lg"></div>
            {/* text */}
            <h2 className="mt-2">Dr. Gregory Yames</h2>
          </div>

          {/* item */}
          <div className="border border-black/10 rounded-lg bg-white p-2">
            {/* image */}
            <div className="h-52 bg-gray-200 rounded-lg"></div>
            {/* text */}
            <h2 className="mt-2">Dr. Gregory Yames</h2>
          </div>

          {/* item */}
          <div className="border border-black/10 rounded-lg bg-white p-2">
            {/* image */}
            <div className="h-52 bg-gray-200 rounded-lg"></div>
            {/* text */}
            <h2 className="mt-2">Dr. Gregory Yames</h2>
          </div>
        </div>

        {/* btn */}
        <div className="px-10 py-3 bg-yellow-300 uppercase font-semibold rounded-full w-fit mt-10 mx-auto">
          see more
        </div>
      </div>

      {/* BANNER */}
      <div className="py-30 px-5 bg-green-800 text-white">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-3xl">Ready to get started?</h2>
          <p className="mt-5 font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            consectetur. Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>

        {/* btn */}
        <div className="px-10 py-3 bg-yellow-300 uppercase text-green-800 font-semibold rounded-full w-fit mt-10 mx-auto">
          see more
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-80 bg-[#f5f5f5] py-20 px-5">
        <div className="border border-black/10 bg-white rounded-xl p-5 py-10">
          <div className="flex flex-col gap-20">
            {/* side 1 */}
            <div className="">
              {/* heading */}
              <div className="flex gap-5 items-center">
                <div className="logo rounded-full h-16 w-16 bg-gray-300 border-black/10"></div>
                <h2>Home Economics</h2>
              </div>

              {/* paragraph */}
              <p className="font-light mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                esse obcaecati tempora, numquam ex dignissimos nihil possimus
                quam iure commodi!
              </p>

              {/* socials */}
              <div className="mt-10 flex gap-3">
                {/* item */}
                <div className="w-10 h-10 border border-black/10 bg-amber-100 rounded-full"></div>
                {/* item */}
                <div className="w-10 h-10 border border-black/10 bg-amber-100 rounded-full"></div>
                {/* item */}
                <div className="w-10 h-10 border border-black/10 bg-amber-100 rounded-full"></div>
              </div>
            </div>

            {/* side 2 */}
            <div className="">
              <ul className="flex gap-5 flex-col">
                <li>
                  <a href="#" className="text-2xl font-bold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl font-bold">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl font-bold">
                    Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl font-bold">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl font-bold">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl font-bold">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-black/10 mt-20">
            <p className="mt-10">All right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
