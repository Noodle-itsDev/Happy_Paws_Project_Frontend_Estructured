import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface SimpleBottomNavigationProps {
  labels: {
    recents: string;
    favorites: string;
    nearby: string;
  };
}

export default function SimpleBottomNavigation({ labels }: SimpleBottomNavigationProps) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100vw', boxShadow: '0px 4px 5px gray'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} // Blanco con 80% de transparencia
      >
        <BottomNavigationAction label={labels.recents} icon={<RestoreIcon />} />
        <BottomNavigationAction label={labels.favorites} icon={<FavoriteIcon />} />
        <BottomNavigationAction label={labels.nearby} icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
