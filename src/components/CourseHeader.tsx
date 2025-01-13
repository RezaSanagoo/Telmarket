'use client'

import { useRouter } from 'next/navigation'
import { Avatar, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Right from '@mui/icons-material/ChevronRightRounded';

interface CourseHeaderProps {
    image: string
    name: string
    instructor: string
  }
  
  export default function CourseHeader({ image, name, instructor }: CourseHeaderProps) {
    const router = useRouter()

    return (
    <div className="flex items-center gap-4 aps p-4 py-2 bg-white border-b fixed top-0 left-0 right-0 z-30">
      <div className='flex items-center border-2 border-[#1a8bc499] p-px rounded-md' onClick={() => router.push('/courses')}>
      <Right className='text-4xl mx-[-8px] text-[#1a8bc4]'/>
      <Avatar
        src={image}
        alt={name}
        className="w-10 h-10 mr-1"
      />

      </div>
      <div className="flex-grow w-[calc(100%-162px)]">
        <Typography className="font-bold text-right">
          {name}
        </Typography>
        <Typography className="text-sm text-gray-600 text-right truncate">
          {instructor}
        </Typography>
      </div>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  )
}
