import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PetsIcon from "@mui/icons-material/Pets";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

interface BottomNavProps {
  headerImg: string;
  pawsImg: string;
  navItems: Array<{
    label: string;
    icon: React.ReactElement;
  }>;
}

export default function SimpleBottomNavigation({
  headerImg,
  pawsImg,
  navItems,
}: BottomNavProps) {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <header className="fixed z-20 h-[-100px] w-auto">
        <div className="sticky z-20">
          <img
            src={headerImg}
            alt="Header"
            className="h-[13rem] w-[100vw] z-20"
          />
        </div>

        <Box
          sx={{
            position: "relative",
            zIndex: 30,
            marginTop: "-100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginX: "auto",
            top: "-57px",
          }}
        >
          <div className="relative w-full flex justify-between items-center mt-[-60px] mb-[10px]">
            <img
              src={pawsImg}
              alt="Paws"
              className="w-[170px] h-[70px] z-40 ml-[40px] mt-[20px]"
            />
          </div>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              width: "100%",
              backgroundColor: "#ffffff40",
              height: "65px",
              justifyContent: "normal",
            }}
          >
            {navItems.map((item, index) => (
              <BottomNavigationAction
                key={index}
                label={item.label}
                icon={item.icon}
                sx={{
                  borderRight: "1px solid white",
                  maxWidth: "200px",
                  flexDirection: "row",
                  "& .MuiBottomNavigationAction-label": {
                    fontSize: "20px",
                    transition: "font-size 0.6s ease, color 0.6s ease",
                  },
                  "&.Mui-selected .MuiBottomNavigationAction-label": {
                    fontSize: "20px",
                  },
                  "&:hover .MuiBottomNavigationAction-label": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              />
            ))}
          </BottomNavigation>
        </Box>
      </header>
    </>
  );
}

// Example usage of the component
const navItems = [
  { label: "Menu", icon: <MenuIcon sx={{ color: "white", marginRight: "8px" }} /> },
  { label: "Inicio", icon: <HomeIcon sx={{ color: "white", marginRight: "8px" }} /> },
  { label: "Voluntariados", icon: <HandshakeIcon sx={{ color: "white", marginRight: "8px" }} /> },
  { label: "Adopta", icon: <PetsIcon sx={{ color: "white", marginRight: "8px" }} /> },
  { label: "Protectoras", icon: <LocationOnIcon sx={{ color: "white", marginRight: "8px" }} /> },
  { label: "Donaciones", icon: <VolunteerActivismIcon sx={{ color: "white", marginRight: "8px" }} /> },
  { label: "About Us", icon: <HomeIcon sx={{ color: "white", marginRight: "8px" }} /> },
];

<SimpleBottomNavigation
  headerImg="path/to/header-image.png"
  pawsImg="path/to/paws-image.png"
  navItems={navItems}
/>;
