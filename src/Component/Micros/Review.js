import React, { useState } from "react";
import { reviewcarousel } from '../../Contans';

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewcarousel.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewcarousel.length) % reviewcarousel.length);
  };

  const renderSVG = () => (
    <svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
      fill="orange"
    />
  </svg>
  );

  return (
    <>
      <div className="flex flex-col h-screen w-screen gap-5 font-LexendDeca relative  mb-14">
        <h1 className="text-[60px] flex justify-center items-center mb-20 mt-10 font-bold">What people say about the team</h1>
        <div className="flex gap-5  ml-auto flex-col">
          <div
            className="flex transition-transform duration-500 gap-10 "
            style={{ transform: `translateX(-${currentIndex * 410}px)` }}
          >
            {reviewcarousel.map((item, index) => (
              <div
                key={index}
                className="shadow-lg justify-start h-auto  p-8 w-[370px]  bg-white flex  flex-col py-10"
              >
               <div className="flex gap-2 mb-8">
                  {Array.from({ length: 5 }, (_, index) => (
                    <React.Fragment key={index}>{renderSVG()}</React.Fragment>
                  ))}
                </div>
                <div className="h-auto">
                  <p>{item.paragraph}</p>
                </div>
                <div className="mt-10 flex gap-8">
                  <img src={item.image} alt="" />
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-[20px] ">{item.name}</div>
                    <div className="text-[15px] text-[#7676B2]">{item.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-screen absolute flex items-center gap-20 bottom-0 left-[500px] justify-center">
          <div className="flex justify-center items-center gap-10">
          <button onClick={handlePrev}><svg
width="60px"
height="60px"
viewBox="0 0 24 24"
id="_24x24_On_Light_Next"
data-name="24x24/On Light/Next"
xmlns="http://www.w3.org/2000/svg"
>
  <rect id="view-box" width="24" height="24" fill="#141124" opacity="0" />
  <path
    id="Shape"
    d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z"
    transform="translate(24 0) scale(-1, 1)" 
    fill="#141124"
  />
</svg>

</button>
<button onClick={handleNext}>
  <svg
    width="60px"
    height="60px"
    viewBox="0 0 24 24"
    id="_24x24_On_Light_Next"
    data-name="24x24/On Light/Next"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect id="view-box" width="24" height="24" fill="#141124" opacity="0" />
    <path
      id="Shape"
      d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z"
      fill="#141124"
    />
  </svg>
</button>


          </div>
        </div>
      </div>
    </>
  );
}
