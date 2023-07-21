import React from "react";
import { mockup, navbar, gridblog, product } from "../../Contans";

const MockupComponent = () => {
  console.log(mockup);
  console.log("Product Data:", product);
  return (
    <>
      <section className="container mx-auto w-scree h-screen flex justify-start items-center grid grid-cols-12 ">
        <div className="col-span-5 font-LexendDeca text-black flex flex-col gap-2">
          <p className="text-[56px] font-bold">{mockup[0].h1}</p>
          <p className="text-[20px] w-[90%] ">{mockup[0].text}</p>
          <a className="flex gap-5 justify-start items-center mt-10 ">
            <p className="text-blue-600">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="9"
              viewBox="0 0 20 9"
              fill="none"
            >
              <path
                d="M15.1484 3.25486H1.38593C0.698425 3.25486 0.135925 3.81736 0.135925 4.50486C0.135925 5.19236 0.698425 5.75486 1.38593 5.75486H15.1484V7.99236C15.1484 8.55486 15.8234 8.82986 16.2109 8.42986L19.6859 4.94236C19.9234 4.69236 19.9234 4.30486 19.6859 4.05486L16.2109 0.567359C15.8234 0.167358 15.1484 0.454859 15.1484 1.00486V3.25486Z"
                fill="#5468E7"
              />
            </svg>
          </a>
        </div>
        <div className="col-span-6 relative flex justify-center items-center  w-full h-full">
          <div className="absolute -mr-[210px] -ml-[80px] overflow-hidden ">
            <img
              src={mockup[0].image}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MockupComponent;
