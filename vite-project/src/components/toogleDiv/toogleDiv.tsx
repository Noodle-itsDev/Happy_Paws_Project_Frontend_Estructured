import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ToggleDiv: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  const toggleDiv = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      gsap.to(divRef.current, { duration: 0.5, width: '7vw', height: 'auto' });
    } else {
      gsap.to(divRef.current, { duration: 0.5, width: '70vw', height: 'auto' });
    }
  }, [isExpanded]);


  return (
    <div className="container flex flex-row h-[755px] ">
      <div ref={divRef} className="">
        <div className="bg-gray-200 rounded shadow-md h-[755px]">
          This is a toggleable div!
        </div>
      </div>
      <button
        className="bg-[#50c878] text-white px-4 rounded-r-[10px]"
        onClick={toggleDiv}
      >
        Toggle Div
      </button>
    </div>
  );
};

export default ToggleDiv;
