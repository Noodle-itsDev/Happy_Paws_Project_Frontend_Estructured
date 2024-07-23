import React from "react";
import "../../index.css";
import HeaderGreen from "../../components/header/headerGreen";
import DataTable from "../../components/tableFilter/tableFilter";

const ProtectoraHomeView: React.FC = () => {
  return (
    <>
      <HeaderGreen />
      <main className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-gray-100 mt-[5rem]">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-10 grid-rows-2 lg:grid-rows-1 gap-4 lg:gap-0">
          <div className="bg-green-500 flex items-center justify-center lg:col-span-6 px-{20px}">
              <DataTable></DataTable>
          </div>
          <div className="bg-blue-500 flex items-center justify-center lg:col-span-4">
            <p className="text-white text-2xl lg:text-4xl">30%</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProtectoraHomeView;
