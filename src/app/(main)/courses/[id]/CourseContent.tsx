'use client'

import { Avatar, IconButton, Typography, Popover } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ReportIcon from '@mui/icons-material/Report'
import { useState } from 'react'

interface Course {
  id: number
  title: string
  description: string
  image: string
}

export default function CourseContent({ course }: { course?: Course }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
      <IconButton
  onClick={handleClick}
  style={{ zIndex: 1000, pointerEvents: "auto", background: "red" }}
>
        <MoreVertIcon />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="flex flex-col p-2 min-w-[150px]">
          {[
            {
              icon: <ShareIcon sx={{ fontSize: 20 }} />,
              text: "اشتراک گذاری",
            },
            {
              icon: <BookmarkBorderIcon sx={{ fontSize: 20 }} />,
              text: "ذخیره",
            },
            {
              icon: <ReportIcon sx={{ fontSize: 20 }} />,
              text: "گزارش",
            },
          ].map((item, index) => (
            <button
              key={index}
              className="p-2 hover:bg-gray-100 rounded flex items-center gap-3 justify-between"
              onClick={handleClose}
            >
              <span className="text-sm">{item.text}</span>
              <div className="text-gray-600 w-6 flex justify-center">
                {item.icon}
              </div>
            </button>
          ))}
        </div>
      </Popover>
    </div>
  )
}
