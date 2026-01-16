import { useState } from "react";
import "./App.css";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFireBurner,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./components/FeatureCard";
import Heading from "./components/section/Heading";
import StatisticCard from "./components/StatisticCard";
import DoctorCard from "./components/DoctorCard";
import Logo from "./components/Logo";
import SocialItem from "./components/footer/SocialItem";

function App() {
  return (
    <>
      {/* LANDING */}
      <div className="bg-offwhite py-14">
        <div className="h-screens w-10/12 md:w-11/12 mx-auto">
          {/* NAVIGATOR */}
          <div className="p-3 mb-10 bg-white border border-black/50 rounded-full flex items-center justify-between">
            {/* LOGO */}
            <Logo />

            {/* NAV LINK */}
            <ul className="hidden xl:flex items-center gap-5 uppercase font-semibold text-black ">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">services</a>
              </li>
              <li>
                <a href="#">doctors</a>
              </li>
              <li>
                <a href="#">tools</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">contact us</a>
              </li>
            </ul>

            {/* BUTTON | BAR */}
            <div className="flex items-center gap-5">
              {/* BUTTON */}
              <div className="rounded-full uppercase px-10 py-4 font-semibold bg-primary text-white hidden sm:block">
                book appointment
              </div>

              <div className="xl:hidden">
                {/* BAR */}
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-primary"
                  size="2xl"
                />
              </div>
            </div>
          </div>

          {/* HEADING */}
          <div className="bg-primary text-white py-24 rounded-4xl">
            <div className="w-10/12 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 lg:gap-10 ">
              {/* side 1 */}
              <div className="">
                {/* heading */}
                <div className="">
                  <h1 className="text-4xl font-bold capitalize leading-relaxed">
                    Your health our priority.
                  </h1>
                  <p className="mt-5 font-light leading-relaxed max-w-prose">
                    Delivering comprehensive mental health suport through out
                    innovative platform that seamlessly connects your teams.
                  </p>
                </div>

                {/* buttons */}
                <div className="flex gap-3 flex-col mt-10 uppercase md:flex-row">
                  {/* btn 1 */}
                  <div className="px-5 py-3 border border-black/10 rounded-4xl w-fit flex items-center gap-2 bg-white text-[#074F22]">
                    <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                    <p className="font-medium">Learn more</p>
                  </div>
                  {/* btn 2 */}
                  <div className="px-5 py-3 border bg-accent text-primary font-bold border-black/10 rounded-4xl w-fit flex items-center gap-2 shadow-md">
                    Book appointment
                  </div>
                </div>

                {/* stats */}
                <div className="bg-white p-5 mt-20 rounded-xl text-black max-w-72">
                  {/*  */}
                  <div className="flex">
                    <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
                  </div>

                  {/*  */}
                  <p className="uppercase font-medium mt-5 text-sm">
                    More than 150+ experience doctors around the world
                  </p>
                </div>
              </div>

              {/* side 2 */}
              <div className="flex-1">
                <div className="mx-auto w-72 h-80 bg-white/10 rounded-4xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="py-20 px-5 flex flex-row justify-center items-center text-center gap-5 lg:gap-10">
        {/* item */}
        <StatisticCard number={90} title={"patients"} />

        <div className="h-7 w-0.5 bg-black/20"></div>

        {/* item */}
        <StatisticCard number={12} title={"Appointments"} />

        <div className="h-7 w-0.5 bg-black/20"></div>

        {/* item */}
        <StatisticCard number={76} title={"Doctors"} />
      </div>

      {/* FEATURES */}
      <div className="py-40 bg-primary">
        <div className="max-w-7xl w-10/12 mx-auto">
          {/* heading */}
          <Heading title={"High quality care for over 23 years"} />

          {/* parent */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-10/12 lg:w-full mx-auto">
            {/* item */}
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>
        </div>
      </div>

      {/* BANNER */}
      <div className="py-30 text-white">
        <div className="max-w-7xl w-10/12 mx-auto bg-primary border rounded-xl py-14">
          <div className="w-10/12 mx-auto flex items-center flex-col-reverse md:flex-row gap-10">
            {/* side 1 */}
            <div className="">
              <h2 className="text-3xl font-semibold leading-relaxed capitalize">
                Healthier treatments for our patients
              </h2>
              <p className="mt-5 font-light text-offwhite leading-relaxed text-sm max-w-prose">
                Cheapangga majonders majubis ano shala ganders makyonget waz
                biway mashumers ng dites juts at nang jongoloids jowabella
                sudems at ang.
              </p>

              {/* btn */}
              <div className="px-10 py-3 bg-accent text-primary text-xl uppercase font-semibold rounded-full w-fit mt-10">
                see more
              </div>
            </div>
            {/* side 2 */}
            <div className="w-full lg:w-6/12">
              <div className="w-full h-50 lg:h-75 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* LIST DOCTORS */}
      <div className="py-40 border border-black/10 bg-offwhite">
        <div className="max-w-7xl w-10/12 mx-auto">
          {/* heading */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-center uppercase">
              Meet our doctors
            </h2>

            {/* border */}
            <div className="max-w-25 mx-auto h-3 rounded-full bg-primary mt-10"></div>

            {/* paragraph */}
            <p className="mt-10 font-light text-[#444] md:w-8/12 mx-auto text-sm max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              cupiditate, dolor magni culpa sint maiores aliquid! Odit
              blanditiis totam explicabo.
            </p>
          </div>

          {/* parent */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-10/12 lg:w-full mx-auto">
            {/* item */}
            <DoctorCard img={""} name={"Dr. Jerome Estafo"} />
            <DoctorCard img={""} name={"Dr. Jerome Estafo"} />
            <DoctorCard img={""} name={"Dr. Jerome Estafo"} />
            <DoctorCard img={""} name={"Dr. Jerome Estafo"} />
            <DoctorCard img={""} name={"Dr. Jerome Estafo"} />
            <DoctorCard img={""} name={"Dr. Jerome Estafo"} />
            <DoctorCard img={""} name={"Dr. Jerome Estafo"} />
            <DoctorCard img={""} name={"Dr. Jerome Estafo"} />
            <DoctorCard img={""} name={"Dr. Jerome Estafo"} />
          </div>

          {/* btn */}
          <div className="px-10 py-3 bg-accent text-primary uppercase font-semibold rounded-full w-fit mt-20 mx-auto">
            see more
          </div>
        </div>
      </div>

      {/* BANNER */}
      <div className="py-30 md:py-30 md:px-10 bg-green-800 text-white">
        {/* heading */}
        <div className="text-center px-5 md:w-10/12 mx-auto">
          <h2 className="text-4xl font-semibold uppercase leading-relaxed">
            Ready to get started?
          </h2>
          <p className="mt-5 font-light text-offwhite leading-relaxed max-w-prose mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            Lorem ipsum dolor sit adipisicing consectetur elit. Atque,
            excepturi? consectetur.
          </p>
        </div>

        {/* btn */}
        <div className="px-10 py-3 bg-accent text-primary uppercase font-semibold rounded-full w-fit mt-10 mx-auto">
          see more
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-40 bg-offwhite py-20 border-t border-black/20">
        <div className="border max-w-7xl w-10/12 mx-auto border-black/20 bg-white rounded-4xl p-5 md:px-10 pt-20">
          <div className="w-10/12 lg:w-full lg:px-10 mx-auto flex flex-col lg:flex-row gap-20">
            {/* side 1 */}
            <div className="w-full">
              {/* heading */}
              <Logo />

              {/* paragraph */}
              <p className="font-light mt-5 leading-relaxed max-w-prose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                esse obcaecati tempora, numquam ex dignissimos nihil possimus
                quam iure commodi!
              </p>

              {/* socials */}
              <div className="mt-10 flex gap-3">
                {/* item */}
                <SocialItem icon={faFireBurner} link={"#"} />
                <SocialItem icon={faFireBurner} link={"#"} />
                <SocialItem icon={faFireBurner} link={"#"} />
                <SocialItem icon={faFireBurner} link={"#"} />
              </div>
            </div>

            {/* side 2 */}
            <div className="w-full flex lg:justify-end">
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

          <div className="border-t border-black/10 mt-20 text-center uppercase">
            <p className="my-10 max-w-7xl mx-auto">All right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
