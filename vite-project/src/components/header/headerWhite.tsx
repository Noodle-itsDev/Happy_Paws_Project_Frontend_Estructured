import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { SxProps, Theme } from "@mui/material/styles";
import AccountMenu from "../tableFilter/accountMenu";
import ButtonWithDropdown from "../tableFilter/accountMenu";

interface BottomNavProps {
  headerImg: string;
  pawsImg: string;
  navItems: Array<{
    label: string;
    icon: React.ReactElement;
  }>;
}

export const SimpleBottomNavigation: React.FC<BottomNavProps> = ({
  headerImg,
  pawsImg,
  navItems,
}) => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <header className="fixed z-20 h-[-100px] w-auto">
        <div className="relative">
          <div className="sticky bg-flex flex-row">
            <div className="relative z-10">
              <img
                src={headerImg}
                alt="Header"
                className="h-[12rem] w-[100vw]"
                style={{ filter: "drop-shadow(0px 1px 4px gray)" }}
              />
            </div>
          </div>
        </div>
        <div>
          <Box
            sx={
              {
                position: "relative",
                zIndex: 30,
                marginTop: "-100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginX: "auto",
                top: "-57px",
                borderBottom: "1px white solid",
              } as SxProps<Theme>
            }
          >
            <div className="relative w-full flex justify-between items-center mt-[-45px] mb-[10px]">
              <img
                src={pawsImg}
                alt="Paws"
                className="w-[170px] h-[70px] z-40 ml-[40px] mt-[20px]"
                style={{ filter: "drop-shadow(0px 4px 2px gray)" }}
              />
            </div>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(_event, newValue) => {
                setValue(newValue);
              }}
              sx={
                {
                  width: "100%",
                  backgroundColor: "#ffffff40",
                  height: "65px",
                  justifyContent: "normal",
                  boxShadow: "0px 3px 8px #8080808c",
                } as SxProps<Theme>
              }
            >
              {navItems.map((item, index) => (
                <BottomNavigationAction
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  sx={
                    {
                      maxWidth: "200px",
                      flexDirection: "row",
                      "& .MuiBottomNavigationAction-label": {
                        fontSize: "20px",
                        transition: "font-size 0.6s ease, color 0.6s ease",
                      },
                      "&.Mui-selected .MuiBottomNavigationAction-label": {
                        fontSize: "20px",
                        fontWeight: 600,
                        transition: "font-weight 0.6s ease, color 0.6s ease",
                      },
                      "&:hover .MuiBottomNavigationAction-label": {
                        color: "rgba(255, 255, 255, 0.8)",
                        fontWeight: 600,
                        transition: "font-weight 0.6s ease, color 0.6s ease",
                      },
                    } as SxProps<Theme>
                  }
                />
              ))}
            </BottomNavigation>
          </Box>
        </div>

      </header>
    </>
  );
};
