import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HeaderGreen from '../../assets/img/navbarImgGreen.png';
import PetsIcon from '@mui/icons-material/Pets';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div className="sticky z-20">
        <img
          src={HeaderGreen}
          alt="Header green"
            className='h-[13rem] w-[100vw] z-20'
        />
      </div>
      <Box
        sx={{
          position: 'relative',
          zIndex: 30,
          marginTop: '-100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginX: 'auto', 
          top: '-20px',
          outline: '1px solid white'
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',

          }}
        >
          <BottomNavigationAction label="Inicio" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Voluntariados" icon={<HandshakeIcon />} />
          <BottomNavigationAction label="Protectoras" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Adopciones" icon={<PetsIcon />} />
          <BottomNavigationAction label="Donaciones" icon={< VolunteerActivismIcon/>} />
        </BottomNavigation>
      </Box>
    </>
  );
}
