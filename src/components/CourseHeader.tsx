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
    <div className="flex items-center gap-4 aps p-4 py-2 bg-white border-b fixed top-0 left-0 right-0 z-30 justify-between">
      <div className='flex items-center p-px rounded-md w-10 justify-center' onClick={() => router.push('/courses')}>
      <Right className='text-4xl mx-[-8px] text-[#707991]'/>

      </div>
      <div className="flex flex-col items-center justify-center">
      <Avatar
        src={image}
        alt={name}
        className="w-8 h-8"
      />
        <Typography className="font-bold text-sm">
          {name}
        </Typography>
      </div>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  )
}
