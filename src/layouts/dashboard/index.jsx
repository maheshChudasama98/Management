import { useState } from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { grey } from 'src/theme/palette';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  // const state = useSelector(state);
  
  const [openNav, setOpenNav] = useState(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} isActive={isActive} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <div style={{ position: "relative" }}>
          <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} isActive={isActive} />

          <IconButton
            size="small"
            onClick={() => setIsActive(!isActive)}
            sx={{
              position: "absolute",
              right: -14.5,
              top: 15,
              border: (theme) => `dashed 1px ${theme.palette.divider}`,
              borderRadius: 10,
              background: grey[100],
              // background: "#f9fafb",
              zIndex: 999999
            }}>

            {
              isActive ?
                <KeyboardArrowRightIcon fontSize="inherit" /> :
                <KeyboardArrowLeftIcon fontSize="inherit" />
            }
          </IconButton>
        </div>

        <Main>{children}</Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
