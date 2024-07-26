import React from "react";
import "../../index.css";
import { SimpleBottomNavigation } from "../../components/header/headerWhite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PetsIcon from "@mui/icons-material/Pets";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import WhiteLogo from "../../assets/img/whiteFlatPaws.png";
import GrennNav from "../../assets/img/navbarImgGreen.png";
import NotificationPanel from "../../components/tableFilter/tableFilter";

const ProtectoraHomeView: React.FC = () => {
  const navItems = [
    {
      label: "Menu",
      icon: <MenuIcon sx={{ color: "white", marginRight: "8px" }} />,
    },
    {
      label: "Inicio",
      icon: <HomeIcon sx={{ color: "white", marginRight: "8px" }} />,
    },
    {
      label: "Voluntarios",
      icon: <HandshakeIcon sx={{ color: "white", marginRight: "8px" }} />,
    },
    {
      label: "Peticiones",
      icon: <PetsIcon sx={{ color: "white", marginRight: "8px" }} />,
    },
    {
      label: "Protectoras",
      icon: <LocationOnIcon sx={{ color: "white", marginRight: "8px" }} />,
    },
    {
      label: "Donaciones",
      icon: (
        <VolunteerActivismIcon sx={{ color: "white", marginRight: "8px" }} />
      ),
    },
    {
      label: "About Us",
      icon: <HomeIcon sx={{ color: "white", marginRight: "8px" }} />,
    },
  ];

  return (
    <>
      <SimpleBottomNavigation
        headerImg={GrennNav}
        pawsImg={WhiteLogo}
        navItems={navItems}
      />
      <main className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-gray-100  mt-[8rem] bg-[#efefef]">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-10 grid-rows-2 lg:grid-rows-1 gap-4 lg:gap-0">
          <div className=" flex items-center justify-center lg:col-span-4 order-1 lg:order-2">
              <div className="w-[70%] h-[100vh] bg-[#4bbe7c]">
                  <div></div>
                  <div></div>
              </div>
          </div>
          <div className=" flex items-center justify-center lg:col-span-6 order-2 lg:order-1 px-4">
          <NotificationPanel/>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProtectoraHomeView;
