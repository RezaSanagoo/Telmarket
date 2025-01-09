'use client'

import { Avatar, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

interface CourseHeaderProps {
    image: string
    name: string
    instructor: string
  }
  
  export default function CourseHeader({ image, name, instructor }: CourseHeaderProps) {
    return (
    <div className="flex items-center gap-4 p-4 bg-white border-b fixed top-0 left-0 right-0 z-30">
      <Avatar
        src={image}
        alt={name}
        className="w-10 h-10"
      />
      <div className="flex-grow w-[calc(100%-120px)]">
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
