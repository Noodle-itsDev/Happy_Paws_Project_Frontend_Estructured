import React from "react";
import '../../index.css';
import ButtonToggle from "../../components/toggleButton/buttonToggler";
import SimpleBottomNavigation from "../../components/header/headerWhite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PetsIcon from "@mui/icons-material/Pets";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import WhiteLogo from "../../assets/img/whitePaws.png";
import GrennNav from "../../assets/img/navbarImgOrange.png";

const RegisterLoginView: React.FC = () => {
  const navItems = [
    { label: "Menu", icon: <MenuIcon sx={{ color: "white", marginRight: "8px" }} /> },
    { label: "Inicio", icon: <HomeIcon sx={{ color: "white", marginRight: "8px" }} /> },
    { label: "Voluntariados", icon: <HandshakeIcon sx={{ color: "white", marginRight: "8px" }} /> },
    { label: "Adopta", icon: <PetsIcon sx={{ color: "white", marginRight: "8px" }} /> },
    { label: "Protectoras", icon: <LocationOnIcon sx={{ color: "white", marginRight: "8px" }} /> },
    { label: "Donaciones", icon: <VolunteerActivismIcon sx={{ color: "white", marginRight: "8px" }} /> },
    { label: "About Us", icon: <HomeIcon sx={{ color: "white", marginRight: "8px" }} /> },
    
  ];

  return (
    <>
      <SimpleBottomNavigation
        headerImg={GrennNav}
        pawsImg={WhiteLogo}
        navItems={navItems}
      />
      <main className="w-screen h-[120vh] bg-white flex flex-col items-center justify-center">
        <ButtonToggle />
      </main>
    </>
  );
};

export default RegisterLoginView;
