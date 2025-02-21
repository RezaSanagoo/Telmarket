'use client'

import { useRouter } from 'next/navigation'
import { Avatar, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Right from '@mui/icons-material/ChevronRightRounded';

interface CourseHeaderProps {
    image: string
    name: string
  }
  
  export default function CourseHeader({ image, name }: CourseHeaderProps) {
    const router = useRouter()

    return (
      <>
    <div className="flex items-center gap-4 aps p-4 py-2 bg-white border-b fixed top-0 left-0 right-0 z-30 justify-between">
      <div className='flex items-center p-px rounded-md w-10 justify-center' onClick={() => router.push('/courses')}>
      <IconButton>
        <Right className='text-4xl text-[#707991]'/>
      </IconButton>
      </div>
      <div className="flex flex-col items-center justify-center">
      <Avatar
        src={image}
        alt={name}
        className="w-8 h-8"
      />
        <p className="font-bold text-sm">
          {name}
        </p>
      </div>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
    <div className='w-full h-12 bg-yellow-300 flex items-center p-2'><p>اتصال به صرافی معتبر</p></div>
    </>
  )
}
