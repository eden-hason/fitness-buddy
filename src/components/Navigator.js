import React, { useEffect, useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useLocation, useNavigate } from 'react-router-dom';

const tabIndexToRoute = new Map([
  [0, '/'],
  [1, '/workouts'],
  [2, '/meals-plan'],
  [3, '/user'],
]);

export default function Navigator() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let matchedIndex = 0;
    for (let [index, route] of tabIndexToRoute.entries()) {
      if (route === location.pathname) {
        matchedIndex = index;
      }
    }

    setValue(matchedIndex);
  }, [location.pathname]);

  const handleChange = (e, i) => {
    const route = tabIndexToRoute.get(i);
    navigate(route);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label='בית' icon={<HomeIcon />} />
      <BottomNavigationAction label='אימונים' icon={<FitnessCenterIcon />} />
      <BottomNavigationAction label='תפריט' icon={<RestaurantMenuIcon />} />
      <BottomNavigationAction label='פרופיל' icon={<PersonPinIcon />} />
    </BottomNavigation>
  );
}
