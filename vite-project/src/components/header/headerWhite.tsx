import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HeaderWhite from "../../assets/img/navbarImgOrange.png";
import PetsIcon from "@mui/icons-material/Pets";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HomeIcon from "@mui/icons-material/Home";
import WhitePaws from "../../assets/img/whiteFlatPaws.png";
import MenuIcon from "@mui/icons-material/Menu";

export default function SimpleBottomNavigationOrange() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <header className="fixed z-20 h-[-100px]">
        <div className="sticky z-20">
          <img
            src={HeaderWhite}
            alt="Header green"
            className="h-[15rem] w-[100vw] z-20"
          />
        </div>

        <Box
          sx={{
            position: "relative",
            zIndex: 30,
            marginTop: "-100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginX: "auto",
            top: "-57px",
          }}
        >
          <img
            src={WhitePaws}
            alt=""
            className="relative w-[200px] h-[80px] z-40 mt-[-60px] mb-[30px]"
          />
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
            <BottomNavigationAction
              label=""
              icon={<MenuIcon sx={{ color: "white", marginRight: "8px" }} />}
              sx={{
                borderRight: "1px solid white",
                maxWidth: "100px",
                flexDirection: "row",
                "& .MuiBottomNavigationAction-label": {
                  fontSize: "18px",
                  transition: "font-size 0.3s ease, color 0.3s ease",
                },
                "&.Mui-selected .MuiBottomNavigationAction-label": {
                  fontSize: "20px",
                },
                "&:hover .MuiBottomNavigationAction-label": {
                  color: "rgba(255, 255, 255, 0.8)",
                },
              }}
            />
            <BottomNavigationAction
              label="Inicio"
              icon={<HomeIcon sx={{ color: "white", marginRight: "8px" }} />}
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

            <BottomNavigationAction
              label="Voluntariados"
              icon={
                <HandshakeIcon sx={{ color: "white", marginRight: "8px" }} />
              }
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
            <BottomNavigationAction
              label="Adopta"
              icon={<PetsIcon sx={{ color: "white", marginRight: "8px" }} />}
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
            <BottomNavigationAction
              label="Protectoras"
              icon={
                <LocationOnIcon sx={{ color: "white", marginRight: "8px" }} />
              }
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
            <BottomNavigationAction
              label="Donaciones"
              icon={
                <VolunteerActivismIcon
                  sx={{ color: "white", marginRight: "8px" }}
                />
              }
              sx={{
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
          </BottomNavigation>
        </Box>
      </header>
    </>
  );
}
