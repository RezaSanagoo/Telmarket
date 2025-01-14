"use client";
import { Box , Tabs, Tab, CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className=" flex flex-col p-6 gap-4 ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] font-bold text-right text-black">
            رضا ثناگو
          </h2>
          <p className="text-xs text-[#2E2E2E]">Rezasa***@gmail.com</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#2E2E2E]">آخرین بروزرسانی</p>
          <p className="text-xs text-[#2E2E2E]">۱۸:۰۷ ۱۴۰۳/۱۰/۲۳</p>
        </div>
      </div>

      <div className=" bg-[rgba(26,139,196,0.05)] border border-[#1A8BC4] rounded-[10px] flex items-stretch">
        <div className="flex-1 p-3">
          <p className="text-[rgba(0,0,0,0.74)]">پروفایل خود را تکمیل کنید.</p>
        </div>

        <div className="w-[1px] bg-[#1A8BC4]"></div>

        <button className="flex items-center p-3 text-[#1A8BC4] font-bold hover:bg-[rgba(26,139,196,0.1)] transition-colors">
          {/* <EditIcon className="ml-1" /> نظرت راجب این چیه ؟؟؟؟؟؟ */}
          ویرایش پروفایل
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-[20px] text-right">چشم‌انداز شما</h2>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
  <Tabs
    value={selectedTab}
    onChange={handleTabChange}
    
    textColor="primary"
    indicatorColor="primary"
  >
    <Tab label="چشم انداز یک" />
    <Tab label="چشم انداز دو" />
    <Tab label="چشم انداز سه" />
  </Tabs>
</Box>
      </div>

      <div className="flex justify-center items-center">
        <CircularProgress
          variant="determinate"
          value={75}
          size={276}
          className="text-[#1A8BC4]"
        />
        <div className="absolute flex flex-col items-center">
          <p className="text-2xl font-bold">روند دوره</p>
          <p className="text-[48px] font-black text-[#1A8BC4]">75%</p>
        </div>
      </div>

      <p className="text-xs font-bold text-right text-[rgba(0,0,0,0.8)]">
        * توضیحات اضافه اینجا
      </p>
      <p className="text-xs font-bold text-right text-[rgba(0,0,0,0.8)]">
        توضیحات اضافه اینجا توضیحات اضافه قرار میگیرد.
      </p>

      <div className="flex gap-4">
        <button className="w-[167px] h-[42px] rounded-[12px] bg-[#1A8BC4] text-white">
          دکمه اول
        </button>
        <button className="w-[167px] h-[42px] rounded-[12px] border bg-[#1A8BC4] text-white">
          دکمه دوم
        </button>
      </div>
    </div>
  );
}
