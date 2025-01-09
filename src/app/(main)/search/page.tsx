import Search from "@mui/icons-material/Search";

export default function SearchPage() {
  const searchItems = ['بازار طلا و دلار', 'رمز ارز', 'بیت‌کوین', 'بورس و اوراق', 'فارکس'];
  const searchIcon = <Search sx={{ fontSize: 20, color: "#003988" }} />;


  return (
    <div className="flex flex-col items-center w-full px-3 py-4 gap-8">
      {/* Search Bar */}
      <div className="relative w-full h-[40px]">
        <div className="flex items-center w-full h-full px-4 bg-[#ECECEC] rounded-[9px] gap-4">
          <Search className=" text-gray-500" />
          <input
            type="text"
            placeholder="جستجو"
            className="w-full h-[20px] bg-transparent outline-none font-iranYekan text-right placeholder:text-gray-500"
          />
        </div>
      </div>

    <div className="flex flex-col gap-5 w-full">
      <div className="w-full h-[27px] font-iranYekan text-[16px] font-extrabold">
        جستجوی پرطرفدار
      </div>

      {/* Popular Search Items */}
      <div className="w-full flex flex-col gap-[10px]">
      {searchItems.map((title, index) => (
          <div 
            key={index}
            className="w-full h-[43px] gap-4 flex items-center justify-between"
          >
            <div className="w-[25px] h-[43px] flex items-center justify-center">
              {searchIcon}
            </div>
            <span className="w-full h-[43px] content-center font-iranYekan text-[16px] font-bold leading-[27.64px] border-b border-[#00000033]">
              {title}
            </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
