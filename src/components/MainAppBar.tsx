"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppBar, IconButton, Toolbar, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText  } from '@mui/material'
import MenuIcon from '@mui/icons-material/MenuRounded'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import LogoutIcon from '@mui/icons-material/Logout'
import Image from 'next/image'

import logo from "../../public/img/LogoT.png";

export default function MainAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const menuItems = [
    { text: "پروفایل", icon: <PersonIcon />, path: "/profile" },
    { text: "دوره‌ها", icon: <SchoolIcon />, path: "/courses" },
    {
      text: "خروج",
      icon: <LogoutIcon />,
      onClick: () => {
        localStorage.removeItem("token");
        router.push("/login");
      },
    },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          backgroundColor: "white",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #D9DCE0",
          zIndex: 1000,
        }}
      >
        <Toolbar className="flex justify-between">
          <Image
            src={logo.src} 
            alt="TelMarket"
            width={72} // Adjust based on your logo's dimensions
            height={24} // Adjust based on your logo's dimensions
            className="h-6 mr-2"
            priority
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ ml: 1, padding: 0 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer 
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <List className="my-3 w-[70vw]">
          <Image
            src={logo.src}
            alt="logo"
            className="h-6 mr-4"
            width={72}
            height={24}
          />

          <hr className="mt-3" />

          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => {
                if (item.path) {
                  router.push(item.path);
                } else if (item.onClick) {
                  item.onClick();
                }
                setDrawerOpen(false);
              }}
              sx={{ cursor: "pointer" }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>{item.icon}</ListItemIcon>

              <ListItemText
                primary={item.text}
                sx={{
                  textAlign: "right",

                  "& .MuiTypography-root": {
                    textAlign: "right",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
}
