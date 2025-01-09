'use client'

import { Avatar, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

interface Course {
  id: number
  title: string
  description: string
  image: string
}

export default function CourseContent({ course }: { course?: Course }) {
  return (
    <div className="flex items-center p-4 bg-white border-b">
      <Avatar
        src={course?.image}
        alt={course?.title}
        className="w-12 h-12 ml-4"
      />
      <div className="flex-grow">
        <Typography className="font-bold text-right">
          {course?.title}
        </Typography>
        <Typography className="text-sm text-gray-600 text-right">
          {course?.description}
        </Typography>
      </div>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  )
}
