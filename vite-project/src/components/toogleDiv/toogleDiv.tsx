import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import './toogleDiv.css';

interface ToggleDivProps {
  contentOne: ReactNode;
  contentTwo: ReactNode;
  zIndexOne: number;
  zIndexTwo: number;
}

const ToggleDiv: React.FC<ToggleDivProps> = ({ contentOne, contentTwo, zIndexOne, zIndexTwo }) => {
  const [isExpandedOne, setIsExpandedOne] = useState(false);
  const [isExpandedTwo, setIsExpandedTwo] = useState(false);

  const divRefOne = useRef<HTMLDivElement | null>(null);
  const divRefTwo = useRef<HTMLDivElement | null>(null);

  const toggleDivOne = () => {
    setIsExpandedOne(!isExpandedOne);
    if (isExpandedTwo) {
      setIsExpandedTwo(false);
    }
  };

  const toggleDivTwo = () => {
    setIsExpandedTwo(!isExpandedTwo);
    if (isExpandedOne) {
      setIsExpandedOne(false);
    }
  };

  useEffect(() => {
    if (isExpandedOne) {
      gsap.to(divRefOne.current, { duration: 0.5, width: '60vw', height: 'auto' });
    } else {
      gsap.to(divRefOne.current, { duration: 0.5, width: '14vw', height: 'auto' });
    }
  }, [isExpandedOne]);

  useEffect(() => {
    if (isExpandedTwo) {
      gsap.to(divRefTwo.current, { duration: 0.5, width: '60vw', height: 'auto' });
    } else {
      gsap.to(divRefTwo.current, { duration: 0.5, width: '6vw', height: 'auto' });
    }
  }, [isExpandedTwo]);

  return (
    <div className="container relative mx-auto h-[755px] l-0">
      <div className="relative">
        <div ref={divRefOne} className="toggleDiv bg-gray-200 rounded-r-[10px] shadow-md" style={{ zIndex: zIndexOne }}>
          <div className="p-4 h-[755px]">
            {contentOne}
          </div>
          <button
            className="toggleButton bg-[#50c878] text-white px-4 rounded-r-[10px] h-[100%]"
            onClick={toggleDivOne}
            style={{ zIndex: zIndexOne }}
          >
            Toggle Div One
          </button>
        </div>
        <div ref={divRefTwo} className="toggleDiv bg-gray-300 rounded-r-[10px] shadow-md" style={{ zIndex: zIndexTwo }}>
          <div className="p-4 h-[755px]">
            {contentTwo}
          </div>
          <button
            className="toggleButton bg-[#50c878] text-white px-4 rounded-r-[5px] h-[100%]"
            onClick={toggleDivTwo}
            style={{ zIndex: zIndexTwo }}
          >
            Toggle Div Two
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleDiv;
