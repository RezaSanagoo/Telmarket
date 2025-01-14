"use client";
import { Box, Tabs, Tab, CircularProgress, Button } from "@mui/material";
import Graph from '@mui/icons-material/AutoGraphRounded';
import { useState } from "react";

interface CourseProgress {
  id: number
  title: string
  progress: number
  description: string
}

const courseData: CourseProgress[] = [
  {
    id: 1,
    title: 'آموزش ری‌اکت',
    description: 'از صفر تا صد ری‌اکت به همراه پروژه‌های کاربردی',
    progress: 85,
  },
  {
    id: 2,
    title: 'برنامه‌نویسی پایتون',
    description: 'دوره جامع پایتون برای توسعه نرم‌افزار و هوش مصنوعی',
    progress: 45,
  },
]

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState(0)
  
  return (
    <div className="flex flex-col p-6 gap-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] font-bold text-right text-black">
            رضا ثناگو
          </h2>
          <p className="text-xs text-[#2E2E2E]">Rezasa***@gmail.com</p>
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <p className="text-xs text-[#2E2E2E]">آخرین بروزرسانی</p>
          <p className="text-xs text-[#2E2E2E]">۱۸:۰۷ ۱۴۰۳/۱۰/۲۳</p>
        </div>
      </div>

      <div className=" bg-[rgba(26,139,196,0.05)] border border-[#1A8BC4] rounded-[10px] flex items-stretch">
        <div className="flex-1 p-3">
          <p className="text-[rgba(0,0,0,0.74)] text-sm">
            پروفایل خود را تکمیل کنید.
          </p>
        </div>

        <div className="w-[1px] bg-[#1A8BC4]"></div>

        <Button className="flex items-center text-sm p-3 text-[#1A8BC4] font-bold">
          ویرایش پروفایل
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl flex items-center gap-2">
          <Graph className="text-2xl" />
          <h2 className="font-bold text-[20px] text-right">چشم‌انداز شما</h2>
        </div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', pb: '0px' }}>
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          variant="scrollable"
          scrollButtons
          dir="rtl"
          textColor="primary"
          indicatorColor="primary"
          sx={{
            '& .MuiTabs-scrollButtons': {
              transform: 'scaleX(-1)'
            }
          }}
        >
          {courseData.map(course => (
            <Tab key={course.id} label={course.title} />
          ))}
        </Tabs>
        </Box>
      </div>

      <div className="flex justify-center items-center relative">
        <div className=" absolute w-[280px] h-[280px] border-[32px] border-gray-200 rounded-full"></div>
        <CircularProgress
          variant="determinate"
          value={courseData[selectedTab].progress}
          size={280}
          className="text-[#1A8BC4]"
          thickness={5}
        />
        <div className="absolute flex flex-col items-center">
          <p className="text-2xl font-bold">روند دوره</p>
          <p className="text-[48px] font-black text-[#1A8BC4]">
            {courseData[selectedTab].progress}%
          </p>
        </div>
      </div>
      
      <p className="text-xs font-bold text-right">
        {courseData[selectedTab].description}
      </p>

      <div className="flex gap-4">
        <Button variant="contained" disableElevation className="flex-grow p-2 rounded-[8px] bg-[#1A8BC4] text-white">
          دکمه اول
        </Button>
        <Button variant="contained" disableElevation className="flex-grow p-2 rounded-[8px] border bg-[#1A8BC4] text-white">
          دکمه دوم
        </Button>
      </div>
    </div>
  );
}