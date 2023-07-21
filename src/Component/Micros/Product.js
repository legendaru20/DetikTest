import React from "react";
import { navbar, gridblog, product } from "../../Contans"; // Remove the duplicate 'product' declaration

const ProductComponent = () => {
  console.log("Product Data:", product);

  return (
    <>
      {product.map((item, index) => (
        <section
          key={item.id} // Add a unique key for each mapped item
          className="container mx-auto w-screen h-screen flex justify-start items-center grid grid-cols-12 gap-20 "
        >
          <div className={`col-span-6 font-LexendDeca text-black flex flex-col gap-2 ${index % 2 === 0 ? 'order-last' : 'order-first'}`}>
            <p className="text-[56px] font-bold">{item.title}</p>
            <p className="text-[20px] w-[90%] ">{item.paragraph}</p>
            <a className="flex gap-5 justify-start items-center mt-10 ">
              <p className="text-blue-600">Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="9"
                viewBox="0 0 20 9"
                fill="none"
              >
                {/* SVG path here */}
              </svg>
            </a>
          </div>
          <div className={`col-span-6 relative flex justify-center items-center w-full h-full ${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
            <img src={item.image} alt="" style={{ width: '100%', height: '80%' }} />
          </div>
        </section>
      ))}
    </>
  );
};

export default ProductComponent;
