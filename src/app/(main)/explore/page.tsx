"use client";
import Image from "next/image";
import React from "react";
// mataleb icon
import { IconButton, Popover } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Oil from "@mui/icons-material/OilBarrelRounded";
import Water from "@mui/icons-material/WaterfallChartRounded";
import Diamond from "@mui/icons-material/DiamondRounded";
import Bitcoin from "@mui/icons-material/CurrencyBitcoinRounded";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReportIcon from "@mui/icons-material/Report";

export default function ExplorePage() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  interface Post {
    id: number;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    likes: number;
    timestamp: string;
    icon: React.ReactNode;
  }

  const marketPosts: Post[] = [
    {
      id: 1,
      title: "تحلیل روزانه بازار ارز",
      category: "بازار ارز",
      description:
        "بررسی نوسانات نرخ ارز و تحلیل عوامل تاثیرگذار بر روند قیمت‌ها در بازار ارز. پیش‌بینی روند کوتاه مدت و بلند مدت دلار و یورو.",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
      likes: 156,
      timestamp: "۱۴۰۲/۱۰/۲۵",
      icon: <CurrencyExchangeIcon />,
    },
    {
      id: 2,
      title: "روند صعودی بیت‌کوین",
      category: "ارزهای دیجیتال",
      description:
        "تحلیل تکنیکال بیت‌کوین و بررسی دلایل رشد اخیر قیمت. نگاهی به حجم معاملات و شاخص‌های کلیدی بازار رمزارزها.",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
      likes: 243,
      timestamp: "۱۴۰۲/۱۰/۲۵",
      icon: <Bitcoin />,
    },
    {
      id: 3,
      title: "گزارش بازار طلا",
      category: "بازار طلا",
      description:
        "آخرین تحولات بازار طلا و سکه. بررسی عوامل موثر بر قیمت طلا و پیش‌بینی روند آتی بازار با توجه به تحولات جهانی.",
      imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d",
      likes: 189,
      timestamp: "۱۴۰۲/۱۰/۲۵",
      icon: <Diamond />,
    },
    {
      id: 4,
      title: "تحلیل تکنیکال شاخص",
      category: "بازار سهام",
      description:
        "تحلیل تکنیکال شاخص کل بورس تهران و بررسی وضعیت صنایع مختلف. معرفی فرصت‌های سرمایه‌گذاری در بازار سهام.",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      likes: 321,
      timestamp: "۱۴۰۲/۱۰/۲۵",
      icon: <Water />,
    },
    {
      id: 5,
      title: "پیش‌بینی قیمت نفت",
      category: "کالاها",
      description:
        "تحلیل بازار جهانی نفت و تاثیر تحولات ژئوپلیتیک بر قیمت‌ها. بررسی روند تقاضای جهانی و تصمیمات اوپک پلاس.",
      imageUrl:
        "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg",
      likes: 167,
      timestamp: "۱۴۰۲/۱۰/۲۵",
      icon: <Oil />,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-[32px]">
      <div className="flex flex-col w-full items-center">
        <div className="w-full h-full flex flex-row-reverse pb-1 gap-3 p-6 scroll-none overflow-x-scroll">
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <div
              key={index}
              className="w-auto h-auto p-[2] rounded-[50px] shadow-[1px_2px_3px_0px_#00000040]"
            >
              <div className="w-[65.45px] h-[65.45px] rounded-[50px] border border-[#E7E7E7] bg-[#FFFFFF26] shadow-[1px_2px_4px_0px_#00000040] flex justify-center items-center">
                <Bitcoin fontSize="large" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        width={0}
        height={0}
        src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg"
        alt="Image"
        className="w-10/12 h-[200px] object-cover rounded-lg"
      />

      <div className="flex flex-col items-center w-full gap-3">
        {marketPosts.map((post) => (
          <div
            key={post.id}
            className="w-full border-t border-[#0000002E] bg-[#FFFFFF47] backdrop-blur-[393.1px]"
          >
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between p-2 pr-4">
                <div className="flex items-center gap-2">
                  <div className="w-[38px] h-[38px] rounded-[50px] border-2 border-[#4190ff] p-[3.45px] flex justify-center items-center">
                    {post.icon}
                  </div>
                  <span className="text-[12px] font-bold">{post.category}</span>
                </div>
                <IconButton onClick={handleClick}>
                  <MoreVertIcon
                    className="rotate-90"
                    sx={{ width: 24, height: 24 }}
                  />
                </IconButton>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <div className="flex flex-col p-2 min-w-[150px]">
                    {[
                      {
                        icon: <ShareIcon sx={{ fontSize: 20 }} />,
                        text: "اشتراک گذاری",
                      },
                      {
                        icon: <BookmarkBorderIcon sx={{ fontSize: 20 }} />,
                        text: "ذخیره",
                      },
                      {
                        icon: <ReportIcon sx={{ fontSize: 20 }} />,
                        text: "گزارش",
                      },
                    ].map((item, index) => (
                      <button
                        key={index}
                        className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 justify-between"
                        onClick={handleClose}
                      >
                        <span className="text-sm">{item.text}</span>
                        <div className="text-gray-600 w-6 flex justify-center">
                          {item.icon}
                        </div>
                      </button>
                    ))}
                  </div>
                </Popover>
              </div>

              <Image
                src={post.imageUrl}
                alt={post.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[213px] object-cover"
              />

              <div className="flex items-center justify-between p-4">
                <p className="text-[16px] leading-[27.64px] font-semibold">
                  {post.title}
                </p>
              </div>
            </div>
            <p className="text-sm px-4">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}