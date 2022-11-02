import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="">
        <div className="flex flex-col p-8 justify-center items-center">
          <h1 className="uppercase text-3xl pb-5">Welcome to Cocktaily</h1>
          <p className="text-lg">Your Daily Dose of Happiness</p>

          <Link
            to="/about"
            className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none uppercase w-40 mt-4"
          >
            Learn More!
          </Link>
        </div>
      </div>
    </Layout>
  );
}
