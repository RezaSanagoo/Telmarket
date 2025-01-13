
'use client'

import ArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import Time from '@mui/icons-material/TimelineRounded';
import Image from 'next/image'


interface PriceCard {
  type: 'currency' | 'crypto' | 'commodity'
  icon: string
  title: string
  abbreviation: string
  change: number
  price: string
}
function formatLargeNumber(num: number | string): string {
  const n = typeof num === 'string' ? parseFloat(num.replace(/,/g, '')) : num
  
  if (n >= 1_000_000_000) {
    return (n / 1_000_000_000).toFixed(2).replace(/\.?0+$/, '') + 'B'
  }
  
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M'
  }
  
  return n.toLocaleString()
}


const priceData: PriceCard[] = [
  // Currencies
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/us.svg',
    title: "دلار آمریکا",
    abbreviation: "USD",
    change: 850,
    price: "52,450",
  },
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/eu.svg',
    title: "یورو",
    abbreviation: "EUR",
    change: 920,
    price: "56,730",
  },
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/gb.svg',
    title: "پوند انگلیس",
    abbreviation: "GBP",
    change: -450,
    price: "65,890",
  },
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/jp.svg',
    title: "ین ژاپن",
    abbreviation: "JPY",
    change: 15,
    price: "334",
  },
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/ch.svg',
    title: "فرانک سوئیس",
    abbreviation: "CHF",
    change: -280,
    price: "56,740",
  },
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/au.svg',
    title: "دلار استرالیا",
    abbreviation: "AUD",
    change: 340,
    price: "32,450",
  },
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/ca.svg',
    title: "دلار کانادا",
    abbreviation: "CAD",
    change: -180,
    price: "36,890",
  },
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/cn.svg',
    title: "یوان چین",
    abbreviation: "CNY",
    change: 120,
    price: "6,920",
  },
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/nz.svg',
    title: "دلار نیوزیلند",
    abbreviation: "NZD",
    change: -220,
    price: "30,150",
  },
  {
    type: 'currency',
    icon: 'https://hatscripts.github.io/circle-flags/flags/se.svg',
    title: "کرون سوئد",
    abbreviation: "SEK",
    change: 90,
    price: "4,780",
  },

  // Cryptocurrencies
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
    title: "بیت‌کوین",
    abbreviation: "BTC",
    change: 25000000,
    price: "2,123,450,000",
  },
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
    title: "اتریوم",
    abbreviation: "ETH",
    change: 4500000,
    price: "115,670,000",
  },
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.svg',
    title: "بایننس کوین",
    abbreviation: "BNB",
    change: -1200000,
    price: "89,450,000",
  },
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
    title: "سولانا",
    abbreviation: "SOL",
    change: 850000,
    price: "24,780,000",
  },
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg',
    title: "ریپل",
    abbreviation: "XRP",
    change: -95000,
    price: "15,340,000",
  },
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/cardano-ada-logo.svg',
    title: "کاردانو",
    abbreviation: "ADA",
    change: 45000,
    price: "1,890,000",
  },
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg',
    title: "پولکادات",
    abbreviation: "DOT",
    change: -180000,
    price: "6,780,000",
  },
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg',
    title: "دوج‌کوین",
    abbreviation: "DOGE",
    change: 12000,
    price: "780,000",
  },
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/chainlink-link-logo.svg',
    title: "چین‌لینک",
    abbreviation: "LINK",
    change: 280000,
    price: "14,560,000",
  },
  {
    type: 'crypto',
    icon: 'https://cryptologos.cc/logos/polygon-matic-logo.svg',
    title: "پالیگان",
    abbreviation: "MATIC",
    change: -85000,
    price: "2,890,000",
  },

  // Commodities
  {
    type: 'commodity',
    icon: 'https://img.icons8.com/fluency/96/gold-bars.png',
    title: "طلای ۱۸ عیار",
    abbreviation: "GOLD",
    change: -85000,
    price: "2,890,000",
  },
  {
    type: 'commodity', 
    icon: 'https://img.icons8.com/fluency/96/coins.png',
    title: "سکه امامی",
    abbreviation: "COIN",
    change: -85000,
    price: "2,890,000",
  },
  {
    type: 'commodity',
    icon: 'https://img.icons8.com/fluency/96/money-bag.png',
    title: "نیم سکه",
    abbreviation: "HCOIN",
    change: -85000,
    price: "2,890,000",
  },
  {
    type: 'commodity',
    icon: 'https://img.icons8.com/fluency/96/cash.png',
    title: "ربع سکه",
    abbreviation: "QCOIN",
    change: -85000,
    price: "2,890,000",
  },
  {
    type: 'commodity',
    icon: 'https://img.icons8.com/?size=80&id=9084&format=png&color=000000',
    title: "نفت برنت",
    abbreviation: "BRENT",
    change: -85000,
    price: "2,890,000",
  }
]



import { useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material'

export default function PricesPage() {
  const [selectedTab, setSelectedTab] = useState(0)

  const filteredData = () => {
    switch(selectedTab) {
      case 0:
        return priceData.slice(0, 10) // Top 10 Currencies
      case 1:
        return priceData.slice(10, 20) // Top 10 Cryptocurrencies
      case 2:
        return priceData.slice(20, 25) // Commodities
      default:
        return priceData
    }
  }

  return (
    <div className="w-full p-4 flex flex-col ">
      <div className="fixed bg-white w-full p-4 right-0 top-[56px] z-50">
      <div className="font-bold text-xl flex items-center gap-2">
        <Time className="text-2xl"/>
        قیمت لحظه‌ای
        <sub className="text-sm font-normal">تومان</sub>
      </div>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', pb: '0px' }}>
        <Tabs 
          value={selectedTab} 
          onChange={(_, newValue) => setSelectedTab(newValue)}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="ارزها" />
          <Tab label="رمزارزها" />
          <Tab label="دارایی‌ها" />
        </Tabs>
      </Box>
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-[93px]">
        {filteredData().map((item, index) => (
          <div
            key={index}
            className="w-[clac(50% - 4px)] aspect-square rounded-[28px] bg-gray-100 p-5 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">

            <div className="h-8">
              <h3 className="font-IRANYekan text-sm font-extrabold leading-4 text-right text-black">
                {item.title}
              </h3>
              <span className="font-IRANYekan text-xs font-bold leading-4 text-right text-[#454343]">
                {item.abbreviation}
              </span>
            </div>
            <Image
              src={item.icon}
              alt={item.title}
              className="w-[32px] h-[32px]"
              width={32}
              height={32}
            />
            </div>

            <div className="flex flex-col items-end ">
            <div className="flex items-center gap-[6px]">
              <span className={` transition-transform
                  ${item.change < 0 ? "text-[#F80000]" : "text-[#00C853]"} text-[22px] font-black pt-1`}>
                {formatLargeNumber(Math.abs(item.change))}
              </span>
              <ArrowUpRoundedIcon
                className={` transition-transform
                  ${item.change < 0 ? "rotate-180 text-[#F80000]" : "text-[#00C853]"} text-3xl mx-[-8px]`}
              />
            </div>

            <div className="">
              <span className="font-IRANYekan text-[32px] font-black leading-[36px] text-black">
              {formatLargeNumber(item.price)}
              </span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
