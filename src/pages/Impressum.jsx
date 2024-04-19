import React from "react";
import Navbar from "../components/Navbar";

const Impressum = () => {
  return (
    <>
      <Navbar />
      <div className=" lg:ml-[400px] sm:ml-10">
        <h1 className=" text-red-500 text-3xl font-bold text-center">
          {" "}
          Impressum{" "}
        </h1>
        <ul>
          <li className=" mb-5 mt-20 mr-8 font-bold">Jakob Müller AG </li>
          <li className=" my-5 mr-8 font-bold">
            Schulstrasse 14, 5070 Frick, Switzerland
          </li>
          <li className=" my-5 mr-8 font-bold">Tel: +41 62 865 51 11</li>
          <li className=" my-5 mr-8 font-bold">Email: jmf@mueller-frick.com</li>
        </ul>
        <p> Manager / CEO : MR Andreas Conzelmann (CEO) </p>
        <br />
        <p className=" mr-16">
          &copy; 2024, Jakob Müller AG Frick, All rights reserved. <br />
          Any reproduction or further distribution in any medium as a whole or
          in parts requires the written consent of Jakob Müller AG.
        </p>
      </div>
    </>
  );
};

export default Impressum;
