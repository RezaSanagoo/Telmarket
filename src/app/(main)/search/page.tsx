import Search from "@mui/icons-material/Search";

export default function SearchPage() {
  const searchItems = ['بازار طلا', 'رمز ارز', 'فارکس', 'بورس', 'قیمت دلار'];
  const searchIcon = <Search sx={{ fontSize: 18 }} />;


  return (
    <div className="flex flex-col items-center w-full p-6 gap-[40px]">
      {/* Search Bar */}
      <div className="relative w-full h-[40px] mt-4">
        <div className="flex items-center w-full h-full px-4 bg-[#ECECEC] rounded-[9px] gap-4">
          <Search className="w-[18.5px] h-[18.5px] text-gray-500" />
          <input
            type="text"
            placeholder="جستجو"
            className="w-[121px] h-[20px] bg-transparent outline-none font-iranYekan text-right placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Popular Searches Title */}
      <div className="w-full h-[27px] font-iranYekan text-[16px] font-extrabold">
        جستجوی پرطرفدار
      </div>

      {/* Popular Search Items */}
      <div className="w-full flex flex-col gap-[10px]">
      {searchItems.map((title, index) => (
          <div 
            key={index}
            className="w-full h-[43px] flex items-center justify-between border-b border-[#00000033]"
          >
            <div className="w-[25px] h-[24px] flex items-center justify-center">
              {searchIcon}
            </div>
            <span className="w-full h-[28px] font-iranYekan text-[16px] font-bold leading-[27.64px] px-6">
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
