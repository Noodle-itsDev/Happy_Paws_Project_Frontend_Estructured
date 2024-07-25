import React from "react";
import SimpleBottomNavigation from "../components/header/headerWhite";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PetsIcon from "@mui/icons-material/Pets";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import whiteLogo from '../assets/img/whitePaws.png';
import GreenNav from '../assets/img/navbarImgGreen.png';

const CalendarPrivate: React.FC = () => {
    const navItems = [
      {
        label: "Menu",
        icon: <MenuIcon sx={{ color: "white", marginRight: "8px", borderLeft: "1px solid white"}} />,
      },
      {
        label: "Inicio",
        icon: <HomeIcon sx={{ color: "white", marginRight: "8px" }} />,
      },
      {
        label: "Voluntariados",
        icon: <HandshakeIcon sx={{ color: "white", marginRight: "8px" }} />,
      },
      {
        label: "Adopta",
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
          headerImg={GreenNav}
          pawsImg={whiteLogo}
          navItems={navItems}
        />
        <main className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-gray-100 mt-[5rem]">
        </main>
      </>
    );
  };
  
export default CalendarPrivate;