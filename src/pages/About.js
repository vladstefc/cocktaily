import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="">
        <div className="flex flex-col p-8 justify-center items-center">
          <h1 className="uppercase text-3xl pb-5">What is Cocktaily?</h1>
          <p className="text-lg">
            Cocktaily is an website where you tell us what ingredient you want
            in your cocktail and we give you a recipe of an amazing cocktail.
          </p>
          <Link
            to="/cocktail"
            className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none uppercase w-48 mt-4 text-center"
          >
            I want a cocktail!
          </Link>
        </div>
      </div>
    </Layout>
  );
}
