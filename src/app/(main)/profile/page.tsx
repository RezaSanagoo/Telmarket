"use client";

import { useState, useEffect } from "react";
import { Box, Tabs, Tab, CircularProgress, Button } from "@mui/material";
import Graph from "@mui/icons-material/AutoGraphRounded";
import EditProfileModal from "@/components/EditProfileModal";
import axios from "axios";
import { motion } from "motion/react";

interface StudentInfo {
  purchased_channels: string[];
  sex: string;
  age: number;
  city: string;
}

interface CourseProgress {
  id: number;
  title: string;
  progress: number;
  description: string;
}


const courseData: CourseProgress[] = [
  {
    id: 1,
    title: "مبانی سرمایه‌گذاری در بورس",
    description: "آشنایی با مفاهیم اولیه و تکنیک‌های سرمایه‌گذاری در بازار بورس",
    progress: 42,
  },
  {
    id: 2,
    title: "تحلیل تکنیکال پیشرفته",
    description: "بررسی ابزارها و استراتژی‌های حرفه‌ای تحلیل تکنیکال در بازارهای مالی",
    progress: 80,
  },
  {
    id: 3,
    title: "مدیریت ریسک و سرمایه‌گذاری",
    description: "اصول مدیریت ریسک و تدوین استراتژی‌های معاملاتی کم‌ریسک",
    progress: 65,
  },
];

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const { data } = await axios.get(
          "https://test22.liara.run/api/account/student-info/",
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(token).access}`,
              "Content-Type": "application/json"
            }
          }
        );
        setStudentInfo(data);
      } catch (error) {
        console.error("Failed to fetch student info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentInfo();
  }, []);

  return (
    <div className="flex flex-col p-6 gap-4">
      {loading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] font-bold text-right text-black">
            نام و نام خانوادگی
          </h2>
          <p className="text-xs text-[#2E2E2E]">Rezasa***@gmail.com</p>
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <p className="text-xs text-[#2E2E2E]">آخرین بروزرسانی</p>
          <p className="text-xs text-[#2E2E2E]">۱۸:۰۷ ۱۴۰۳/۱۰/۲۳</p>
        </div>
        
      </div>

      {studentInfo && (!studentInfo.age || !studentInfo.city || !studentInfo.sex) && (
  <motion.div 
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ 
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.75
    }}
    className="bg-[rgba(26,139,196,0.05)] border border-[#1A8BC4] rounded-[10px] flex items-stretch"
  >
    <div className="flex-1 p-3">
      <p className="text-[rgba(0,0,0,0.74)] text-sm">
        پروفایل خود را تکمیل کنید.
      </p>
    </div>

    <div className="w-[1px] bg-[#1A8BC4]"></div>

    <Button
      className="flex items-center text-sm p-3 text-[#1A8BC4] font-bold"
      onClick={() => setIsEditModalOpen(true)}
    >
      ویرایش پروفایل
    </Button>
  </motion.div>
)}



      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl flex items-center gap-2">
          <Graph className="text-2xl" />
          <h2 className="font-bold text-[20px] text-right">چشم‌انداز شما</h2>
        </div>
        <Box sx={{ borderBottom: 1, borderColor: "divider", pb: "0px" }}>
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}
            variant="scrollable"
            scrollButtons
            dir="rtl"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-scrollButtons": {
                transform: "scaleX(-1)",
              },
            }}
          >
            {courseData.map((course) => (
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
        <Button
          variant="contained"
          disableElevation
          className="flex-grow p-2 rounded-[8px] bg-[#1A8BC4] text-white"
        >
          دکمه اول
        </Button>
        <Button
          variant="contained"
          disableElevation
          className="flex-grow p-2 rounded-[8px] border bg-[#1A8BC4] text-white"
        >
          دکمه دوم
        </Button>
      </div>
      <EditProfileModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
      )}
    </div>
  );
}
