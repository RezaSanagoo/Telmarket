import profileimg from "../../../../public/img/10610fd7c472ce18ebfe4ee045fb276f.jpeg";
import savesvg from "../../../../public/img/Frame.svg";


export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-[108px] h-[108px] mt-[20px] rounded-[59px] border-[3px] border-[#2589EE] shadow-[1px_3px_4px_0px_rgba(0,0,0,0.25)] relative p-[3px]">
        <img
          className="w-full h-full rounded-[59px] object-cover"
          src={profileimg.src}
          alt="Profile"
        />
      </div>
      <div className="w-[157px] h-[20px] mt-[26px] font-IRANYekan text-[32px] font-black leading-[20px] text-center text-black">
        رضا ثناگو
      </div>

      <div className="w-[163px] h-[20px] mt-[12px] font-IRANYekan text-[18px] font-black leading-[20px] text-center text-[#2E2E2E]">
        09123456789
      </div>
      <div className="flex flex-col items-center w-full">
        
        <div className="w-[342px] h-[192px] mt-[40px]">
          
          <div className="flex justify-start items-center gap-2 mb-3">
            <span className="font-IRANYekan text-[16px] font-bold leading-[27.64px] text-right">
              علاقه مندی ها
            </span>
            <svg
              width="13"
              height="18"
              viewBox="0 0 13 18"
              className="opacity-100"
            >
              {/* مطلب svg  */}
            </svg>
          </div>

          {/* مطالب باکس */}
          <div className="flex justify-center gap-3">
            {[
              { width: "w-[116px]", rounded: "rounded-[28px]" },
              { width: "w-[116px]", rounded: "rounded-[28px]" },
              { width: "w-[86px]", rounded: "rounded-r-[28px]" },
            ].map((box, index) => (
              <div
                key={index}
                className={`${box.width} h-[152px] ${box.rounded} bg-[#EFEFEF] shadow-[2px_4px_4px_0px_#00000040] backdrop-blur-[393.1px]`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-[342px] h-[192px] mt-[40px]">
        <div className="flex justify-start items-center gap-2 mb-3">
          <span className="font-IRANYekan text-[16px] font-bold leading-[27.64px] text-right">
         دوره های خریداری شده
          </span>
          <svg
            width="13"
            height="18"
            viewBox="0 0 13 18"
            className="opacity-100"
          >
            {/* مطلب SVG  */}
          </svg>
        </div>

        <div className="flex justify-center gap-3">
          {[
            { width: "w-[116px]", rounded: "rounded-[28px]" },
            { width: "w-[116px]", rounded: "rounded-[28px]" },
            { width: "w-[86px]", rounded: "rounded-r-[28px]" },
          ].map((box, index) => (
            <div
              key={`second-${index}`}
              className={`${box.width} h-[152px] ${box.rounded} bg-[#EFEFEF] shadow-[2px_4px_4px_0px_#00000040] backdrop-blur-[393.1px]`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
