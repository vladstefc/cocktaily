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
          <Button className="uppercase w-48 mt-4 text-center">
            <Link to="/cocktail">I want a cocktail!</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
