"use client";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import School from "@mui/icons-material/SchoolOutlined";
import Person from "@mui/icons-material/AccountCircleOutlined";
import Home from "@mui/icons-material/ExploreOutlined";
import Price from "@mui/icons-material/InsertChartOutlined";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(pathname);

  useEffect(() => {
    if (pathname.startsWith("/courses")) {
      setValue("/courses");
    } else {
      setValue(pathname);
    }
  }, [pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "1px solid #D9DCE0",
        height: "86px",
        padding: "8px",
        paddingTop: "0px",
        fontWeight: "bold",
        zIndex: 1000,
        "& .MuiSvgIcon-root": {
          fontSize: "24px",
          fontWeight: "bold",
        },

        "& .MuiBottomNavigationAction-root": {
          color: "#353535",
          "& path": {
            // stroke: '#353535',
          },
          "& svg": {
            width: "28px",
            height: "28px",
          },
          "&.Mui-selected": {
            color: "#1A8BC4",
            "& path": {
              // stroke: '#1A8BC4',
            },
            "& svg": {
              width: "28px",
              height: "28px",
            },
          },
        },
      }}
    >
      <BottomNavigationAction
        label="پروفایل"
        value="/profile"
        icon={<Person />}
        sx={{
          minWidth: "auto",
          borderRadius: "8px",
          height: "78px",
        }}
      />
      <BottomNavigationAction
        label="دوره‌ها"
        value="/courses"
        icon={<School />}
        sx={{
          minWidth: "auto",
          borderRadius: "8px",
          height: "78px",
        }}
      />
      <BottomNavigationAction
        label="قیمت‌ها"
        sx={{
          minWidth: "auto",
          borderRadius: "8px",
          height: "78px",
        }}
        value="/prices"
        icon={<Price />}
      />
      <BottomNavigationAction
        label="ویترین"
        value="/explore"
        sx={{
          minWidth: "auto",
          borderRadius: "8px",
          height: "78px",
        }}
        icon={<Home />}
      />
    </BottomNavigation>
  );
}