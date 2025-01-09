import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ExplorePage() {
  return (
    <div className="flex flex-col items-center w-full p-6 gap-[40px]">
      {/* matlab Stories  */}
      <div className="w-full h-full rounded-[50px] flex gap-5">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div
            key={index}
            className="w-auto h-auto p-[3.27px] rounded-[50px] shadow-[1px_2px_3px_0px_#00000040]"
          >
            <div className="w-[65.45px] h-[65.45px] rounded-[50px] border border-[#E7E7E7] bg-[#FFFFFF26] shadow-[1px_2px_4px_0px_#00000040]" />
          </div>
        ))}
      </div>

      {/* matlab Banner */}
      <div className="w-[342px] h-[197px] rounded-[16px] bg-[#CBCBCBB2]"></div>

      {/* matlab Posts */}
      <div className="w-full h-full border-t border-[#0000002E] bg-[#FFFFFF47] backdrop-blur-[393.1px]">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
              <div className="w-auto h-auto rounded-[50px] border border-[#E3E3E3] shadow-[1px_2px_3px_0px_#00000040] p-[3.45px]">
                <div className="w-[31.09px] h-[31.09px] rounded-[59px_0_0_0] bg-[#FFFFFFE0]" />
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
            <FavoriteBorderIcon sx={{ width: 21, height: 21 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
