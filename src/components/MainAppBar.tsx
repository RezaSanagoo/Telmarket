"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuRounded";
import PersonIcon from "@mui/icons-material/PersonRounded";
import SchoolIcon from "@mui/icons-material/SchoolRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/HomeRounded";
import Image from "next/image";

import logo from "../../public/img/Logo.png";
import logoT from "../../public/img/LogoT.png";

export default function MainAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { text: "خانه", icon: <HomeIcon sx={{fontSize : "24px"}} />, path: "/" },
    { text: "پروفایل", icon: <PersonIcon sx={{fontSize : "24px"}} />, path: "/profile" },
    { text: "دوره‌ها", icon: <SchoolIcon sx={{fontSize : "24px"}} />, path: "/courses" },
    {
      text: "خروج",
      icon: <LogoutIcon sx={{fontSize : "24px"}} />,
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
          <IconButton
            size="large"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ width: 40, height: 40, margin: "8px" }}
          >
            <MenuIcon />
          </IconButton>

          <p className="text-2xl font-extrabold text-[#4190FF]">مــوجــــ</p>

          <div className="flex items-center justify-center gap-1">
            <Image
              src={logo.src}
              alt="Moj"
              width={56} // Adjust based on your logo's dimensions
              height={56} // Adjust based on your logo's dimensions
              className="p-1"
              priority
            />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List className="mb-3 pt-0 w-[70vw]">
          <Box
            sx={{
              minHeight: "20dvh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: "url('./Tide.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              left: 0,
              top: 0,
            }}
          >
            <Image
              src={logoT.src}
              alt="MojLogo"
              width={206} // Adjust based on your logo's dimensions
              height={206} // Adjust based on your logo's dimensions
              className="p-1"
              priority
              style={{
                filter:
                  "brightness(0) invert(1) drop-shadow(2px 2px 2px #00000088)",
                width: "15vh",
                height: "15vh",
              }}
            />
          </Box>

          <Divider />

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
              sx={{
                cursor: "pointer",
                height: "56px",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px", color: "#666" }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.text}
                sx={{
                  textAlign: "right",
                  "& .MuiTypography-root": {
                    textAlign: "right",
                    fontWeight: "medium ",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}