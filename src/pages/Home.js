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
          <Button className="uppercase w-40 mt-4">
            <Link to="/about">Learn More!</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
