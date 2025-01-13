"use client"; // این خط را اضافه کنید

import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Bitcoin from '@mui/icons-material/CurrencyBitcoinRounded';

export default function ExplorePage() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-col items-center w-full gap-[32px]">
      <div className="flex flex-col w-full items-center">
      {/* matlab Stories  */}
      <div className="w-full h-full flex flex-row-reverse gap-3 p-6 scroll-none overflow-x-scroll">
        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div
            key={index}
            className="w-auto h-auto p-[2] rounded-[50px] shadow-[1px_2px_3px_0px_#00000040]"
          >
            <div className="w-[65.45px] h-[65.45px] rounded-[50px] border border-[#E7E7E7] bg-[#FFFFFF26] shadow-[1px_2px_4px_0px_#00000040] flex justify-center items-center" >
              <Bitcoin fontSize="large" />
            </div>
          </div>
        ))}
      </div>

      {/* matlab Banner */}
      <div className="w-[342px] h-[197px] rounded-[16px] bg-[#CBCBCBB2]"></div>
      </div>

      {/* matlab Posts */}
      <div className="flex flex-col items-center w-full gap-3">
      {[1, 2, 3, 4, 5, 6, 7].map((index) => (
        <div key={index} className="w-full h-full border-t border-[#0000002E] bg-[#FFFFFF47] backdrop-blur-[393.1px]">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <div className="w-[38px] h-[38px] flex items-center justify-center rounded-[50px] border border-[#E3E3E3] shadow-[1px_2px_3px_0px_#00000040] p-[3.45px]">
                <Bitcoin  />
                </div>
                <span className="text-[12px] font-bold">بازار های مالی</span>
              </div>
              <MoreVertIcon
                className="rotate-90"
                sx={{ width: 24, height: 24 }}
              />
            </div>

            <div className="w-full h-[213px] bg-[#CBCBCB]" />

            <div className="flex items-center justify-between p-2">
              <p className="text-[16px] leading-[27.64px]">
                این یک متن نمونه است برای پست ها.
              </p>
              <div onClick={() => setIsLiked(!isLiked)} className="cursor-pointer">
                {isLiked ? (
                  <FavoriteIcon sx={{ width: 21, height: 21, color: "#FF0000" }} />
                ) : (
                  <FavoriteBorderIcon sx={{ width: 21, height: 21 }} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>  );
}
