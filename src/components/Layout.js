import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <header className="mx-auto mb-5 md:container">
        <Navbar />
      </header>

      <main>
        <div className="md:container backdrop-blur-xl text-white rounded-xl border-red-900 mx-auto my-36 pb-5">
          {props.children}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
