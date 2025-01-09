'use client'

import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const courses = [
  {
    id: 1,
    title: 'آموزش ری‌اکت',
    description: 'از صفر تا صد ری‌اکت به همراه پروژه‌های کاربردی',
    image: 'https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png'
  },
  {
    id: 2,
    title: 'برنامه‌نویسی پایتون',
    description: 'دوره جامع پایتون برای توسعه نرم‌افزار و هوش مصنوعی',
    image: 'https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png'
  }
]

export default function CoursesPage() {
  const router = useRouter()

  return (
    <List className="w-full bg-white">
      {courses.map((course) => (
        <ListItem 
          key={course.id}
          alignItems="flex-start"
          className="cursor-pointer hover:bg-gray-50"
          onClick={() => router.push(`/courses/${course.id}`)}
        >
          <ListItemAvatar className=' ml-4 mt-0 rounded-[50%] '>
            <Avatar 
              alt={course.title}
              src={course.image}
              className="w-14 h-14 p-1"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                component="h2"
                className="font-bold mb-1 text-base text-right"
              >
                {course.title}
              </Typography>
            }
            secondary={
              <Typography
                component="p"
                className="text-gray-600 text-sm text-right truncate"
              >
                {course.description}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}
