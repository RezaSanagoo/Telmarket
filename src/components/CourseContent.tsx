"use client";

import AiButton from "./AiButton";
import TestButton from "./TestButton";
import CourseHeader from "./CourseHeader";
import Image from "next/image";

const coursePosts = [
  {
    id: 1,
    title: "مدرس",
    content:
      "سلام خوش آمدید.  این اولین پیام این دوره است.  امیدوارم در کنار همدیگر بهترین جاها برسیم🥰",
    file: "https://s8.uupload.ir/files/1_t3b8.png",
    created_at: "14:30",
  },
  {
    id: 2,
    title: "مدرس",
    content: "خیلی خوشحالم که این دوره رو برای یادگیری انتخاب کردید 🥳🤘",
    file: "https://s8.uupload.ir/files/2_nykd.png",
    created_at: "15:00",
  },
];

const courseInfo = {
  id: 1,
  name: "آموزش ری‌اکت",
  instructor: "از صفر تا صد ری‌اکت به همراه پروژه‌های کاربردی",
  image: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
};

export default function CourseContent({}: { id: string }) {
  return (
    <div className="flex flex-col h-full">
      <CourseHeader {...courseInfo} />
      <div className="h-full p-4 px-2 flex flex-col items-end">
        <div className="max-w-[60rem] w-full">
          {coursePosts.map((item) => (
            <div className="w-full flex flex-col items-end mb-4 gap-1">
              <div
                key={item.id}
                className="relative rounded-xl bg-[#00000010] rounded-ee rounded-es border border-gray-200 font-IRANYekan py-1 w-11/12"
              >
                <h4 className="mb-2 text-sm px-3 font-bold">{item.title}</h4>
                <Image
                  src={item.file}
                  alt="Image File"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="h-6"
                />

                <p className="whitespace-pre-line text-sm px-3 mb-[-16px]">
                  {item.content}
                </p>
                <div className="h-8"></div>
                <span className="absolute bottom-1 left-3 text-gray-500 text-sm">
                  {item.created_at}
                </span>
              </div>
              <div className="flex items-center gap-1 w-11/12">
                <AiButton />
                <TestButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
