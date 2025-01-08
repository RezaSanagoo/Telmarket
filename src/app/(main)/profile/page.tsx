import profileimg from "../../../../public/img/10610fd7c472ce18ebfe4ee045fb276f.jpeg";
import Bookmark from '@mui/icons-material/BookmarkRounded';
import Shopping from '@mui/icons-material/ShoppingCartRounded';


export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center w-full p-6 gap-[40px]">
      <div className="flex flex-col gap-[12px] items-center">
      <div className="w-[108px] h-[108px] rounded-[59px] border-[3px] border-[#2589EE] shadow-[1px_3px_4px_0px_rgba(0,0,0,0.25)] relative p-[3px]">
        <img
          className="w-full h-full rounded-[59px] object-cover"
          src={profileimg.src}
          alt="Profile"
        />
      </div>
      <div className="flex flex-col justify-center items-center"> 
      <div className="  font-IRANYekan text-[32px] font-black text-center text-black">
       Reza Sanagoo
      </div>

      <div className="font-IRANYekan text-[18px] font-black  text-center text-[#2E2E2E]">
        09123456789
      </div>
      </div>
      </div>
      <div className="flex flex-col items-center w-full">
        
    <div className="flex flex-col gap-[16px] w-full">
      <div className="w-full">
        <div className="flex justify-start items-center gap-2 mb-1 pr-2">
            <Bookmark />
            <span className="font-IRANYekan text-[16px] font-bold leading-[27.64px] text-right">
              علاقه مندی ها
            </span>
          </div>

          <div className="flex p-2 gap-3 overflow-y-scroll flex-nowrap scroll-none">
          {[
            { width: "min-w-[116px]", rounded: "rounded-[28px]" },
            { width: "min-w-[116px]", rounded: "rounded-[28px]" },
            { width: "min-w-[116px]", rounded: "rounded-[28px]" },
            { width: "min-w-[116px]", rounded: "rounded-[28px]" },
          ].map((box, index) => (
            <div
              key={`second-${index}`}
              className={`${box.width} h-[152px] ${box.rounded} bg-[#EFEFEF] shadow-[2px_4px_4px_0px_#00000040] backdrop-blur-[393.1px]`}
            />
          ))}
          </div>
        </div>
      </div>
      
      <div className="w-full">
        <div className="flex justify-start items-center gap-2 mb-1 pr-2">
          <Shopping />
          <span className="font-IRANYekan text-[16px] font-bold leading-[27.64px] text-right">
         دوره های خریداری شده
          </span>
        </div>

        <div className="flex p-2 gap-3 overflow-y-scroll flex-nowrap scroll-none">
          {[
            { width: "min-w-[116px]", rounded: "rounded-[28px]" },
            { width: "min-w-[116px]", rounded: "rounded-[28px]" },
            { width: "min-w-[116px]", rounded: "rounded-[28px]" },
            { width: "min-w-[116px]", rounded: "rounded-[28px]" },
          ].map((box, index) => (
            <div
              key={`second-${index}`}
              className={`${box.width} h-[152px] ${box.rounded} bg-[#EFEFEF] shadow-[2px_4px_4px_0px_#00000040] backdrop-blur-[393.1px]`}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
