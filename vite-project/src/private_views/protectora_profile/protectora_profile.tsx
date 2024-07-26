import React from "react";
import "../../index.css";
import NotificationPanel from "../../components/tableFilter/tableFilter";
import PrimarySearchAppBar from "../../components/header/headerGradient";
import SimpleBottomNavigation from "../../components/navigation/navigationNavBar";
import ProtectoraPawsCard from "../../components/cardImgProfile.tsx/cardImgProfile";

const ProtectoraHomeView: React.FC = () => {

  return (
    <>
      <PrimarySearchAppBar backgroundGradient=" linear-gradient(90deg, rgba(0,151,178,1) 0%, rgba(126,217,87,1) 100%)" />
      <SimpleBottomNavigation
        labels={{
          recents: "Adopciones",
          favorites: "Inicio",
          nearby: "Voluntariado",
        }}
      />
      <main className="w-[100vw] h-[100vh] p-20 flex flex-col items-center justify-center bg-secondary-orange bg-[#efefef]" style={{ background: "linear-gradient(#22a99947 0%, white 50%, white 100%)" }}>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-10 grid-rows-2 lg:grid-rows-1">
          <div className=" flex items-center justify-center lg:col-span-4 order-1 lg:order-2">
            <div className="w-[80vh] h-[90vh] bg-[#2dae9166] rounded-[20px] flex justify-center">
              <ProtectoraPawsCard/>
            </div>
          </div>
          <div className=" flex items-center justify-center lg:col-span-6 order-2 lg:order-1 px-4">
            <NotificationPanel />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProtectoraHomeView;
