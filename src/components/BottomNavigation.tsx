"use client";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import School from "@mui/icons-material/SchoolRounded";
import Person from "@mui/icons-material/PersonRounded";
import AttachMoney from "@mui/icons-material/AttachMoneyRounded";
import Search from "@mui/icons-material/SearchRounded";
import Home from '@mui/icons-material/BookmarkRounded';
import { useRouter, usePathname } from "next/navigation";
import { useState, SyntheticEvent } from "react";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(pathname);

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
        height: "92px",
        padding: "12px 8px",
        paddingTop: "0px",
        fontWeight: "bold",
        '& .MuiSvgIcon-root': {
      fontSize: '24px',
      fontWeight: 'bold',
    },
        
        "& .MuiBottomNavigationAction-root": {
          color: "#353535",
          fontWeight: "bold",
      '& path': {
        stroke: '#353535',
      },
      '& svg': {
          width: '24px',
          height: '24px',
        },
          "&.Mui-selected": {
            color: "#1A8BC4",
        '& path': {
          stroke: '#1A8BC4',
        },
        '& svg': {
          width: '24px',
          height: '24px',
        }
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
        }}
      />
      <BottomNavigationAction
        label="دوره‌ها"
        value="/courses"
        icon={<School />}
        sx={{
          minWidth: "auto",
        }}
      />
      <BottomNavigationAction
        label="قیمت‌ها"
        sx={{
          minWidth: "auto",
        }}
        value="/prices"
        icon={
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_51_1235)">
            <path d="M12.2 1V23M17.2 5H9.70001C8.77175 5 7.88152 5.36875 7.22514 6.02513C6.56876 6.6815 6.20001 7.57174 6.20001 8.5C6.20001 9.42826 6.56876 10.3185 7.22514 10.9749C7.88152 11.6313 8.77175 12 9.70001 12H14.7C15.6283 12 16.5185 12.3687 17.1749 13.0251C17.8313 13.6815 18.2 14.5717 18.2 15.5C18.2 16.4283 17.8313 17.3185 17.1749 17.9749C16.5185 18.6313 15.6283 19 14.7 19H6.20001" stroke="#353535" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_51_1235">
            <rect width="24" height="24" fill="white" transform="translate(0.200012)"/>
            </clipPath>
            </defs>
            </svg>
            
            }
      />
      <BottomNavigationAction label="جستجو" value="/search"
        sx={{
          minWidth: "auto",
        }} icon={
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8 21L17.45 16.65M19.8 11C19.8 15.4183 16.2183 19 11.8 19C7.38174 19 3.80002 15.4183 3.80002 11C3.80002 6.58172 7.38174 3 11.8 3C16.2183 3 19.8 6.58172 19.8 11Z" stroke="#353535" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
      
      
        
} />
      <BottomNavigationAction label="ویترین" value="/explore"
        sx={{
          minWidth: "auto",
        }} icon={<Home />} />
    </BottomNavigation>
  );
}
