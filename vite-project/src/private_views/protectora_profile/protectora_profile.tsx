import React from "react";
import "../../index.css";
import SimpleBottomNavigationGreen from "../../components/header/headerGreen";
import DataTable from "../../components/tableFilter/tableFilter";

const ProtectoraHomeView: React.FC = () => {
  return (
    <>
      <SimpleBottomNavigationGreen></SimpleBottomNavigationGreen>
      <main className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-gray-100 mt-[5rem]">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-10 grid-rows-2 lg:grid-rows-1 gap-4 lg:gap-0">
          <div className=" flex items-center justify-center lg:col-span-4 order-1 lg:order-2">
            <p className="text-white text-2xl lg:text-4xl">30%</p>
          </div>
          <div className=" flex items-center justify-center lg:col-span-6 order-2 lg:order-1 px-4">
            <DataTable />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProtectoraHomeView;
