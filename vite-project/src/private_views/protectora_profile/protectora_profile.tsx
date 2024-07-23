import React from "react";
import "../../index.css";

const ProtectoraHomeView: React.FC = () => {
  return (
    <>
      <main className="w-[100vw] h-[100vh] flex align-center justify-center">
      <div className="flex h-screen bg-gray-100">
      <div className="w-3/10 bg-blue-500 flex items-center justify-center">
        <p className="text-white">30%</p>
      </div>
      <div className="w-7/10 bg-green-500 flex items-center justify-center">
        <p className="text-white">70%</p>
      </div>
    </div>
      </main>
    </>
  );
};

export default ProtectoraHomeView;
