"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { usePathname } from 'next/navigation'
import { AppBar, IconButton, Toolbar, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText  } from '@mui/material'
import MenuIcon from '@mui/icons-material/MenuRounded'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import LogoutIcon from '@mui/icons-material/Logout'
import Image from 'next/image'

import logo from "../../public/img/Logo.png";

export default function MainAppBar() {
  
  // const pathname = usePathname()
  
  // const getPageTitle = (path: string) => {
  //   switch (path) {
  //     case '/explore':
  //       return 'ویترین'
  //     case '/search':
  //       return 'جستجو'
  //     case '/prices':
  //       return 'قیمت‌ها'
  //     case '/courses':
  //       return 'دوره‌ها'
  //     case '/profile':
  //       return 'پروفایل'
  //     default:
  //       return 'تل‌مارکت'
  //   }
  // }

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
          <div className="flex items-center justify-center gap-1">
          <Image
            src={logo.src} 
            alt="TelMarket"
            width={56} // Adjust based on your logo's dimensions
            height={56} // Adjust based on your logo's dimensions
            className="p-1"
            priority
          />
          </div>
          <p className='text-2xl font-extrabold text-[#4190FF]'>مــوجــــ</p>

          {/* <p className='text-lg font-bold '>{getPageTitle(pathname)}</p> */}

          <IconButton
            size="large"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{width: 40, height: 40, margin: "8px"}}
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
            className=" mr-4"
            width={64}
            height={64}
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
