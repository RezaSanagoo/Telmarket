'use client'

import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import { useRouter } from 'next/navigation'
import Search from "@mui/icons-material/Search"
import { useState, useEffect } from 'react'
import axios from 'axios'

interface Course {
  id: number
  name: string
  description: string
  image: string
}

export default function CoursesPage() {
  const router = useRouter()
  const [courses, setCourses] = useState<Course[]>([])
  // const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    const parsedToken = JSON.parse(token)
    if (!parsedToken.access) {
      localStorage.removeItem('token')
      router.push('/login')
      return
    }

    // First try to load from cache
    const cached = localStorage.getItem('courses')
    if (cached) {
      setCourses(JSON.parse(cached))
    }

    // Then fetch fresh data
    axios.get('https://test22.liara.run/api/channel/detail', {
      headers: {
        Authorization: `Bearer ${parsedToken.access}`,
        'Cache-Control': 'no-cache'
      }
    })
    .then(res => {
      setCourses(res.data)
      localStorage.setItem('courses', JSON.stringify(res.data))
    })
    .catch(() => {
      // If API call fails, redirect to login
      localStorage.removeItem('token')
      router.push('/login')
    })
  }, [router])

  // const filteredCourses = () => {
  //   return courses.filter(course => 
  //     course.name?.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  //   )
  // }

  return (
    <>
      <div className="relative w-full h-[60px] p-3 pt-4 pb-1">
        <div className="flex items-center w-full h-full px-4 bg-[#ECECEC] rounded-[9px] gap-4">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="جستجو"
            className="w-full h-[20px] bg-transparent outline-none font-iranYekan text-right placeholder:text-gray-500"
          />
        </div>
      </div>
      <List className="w-full bg-white">
        {courses.map((course) => (
          <ListItem 
            key={course.id}
            alignItems="flex-start"
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => router.push(`/course?id=${course.id}`)}
          >
            <ListItemAvatar className='ml-4 mt-0 w-14 h-14 p-1 rounded-[50%]'>
              <Avatar 
                alt={course.name}
                src={"https://test22.liara.run" + course.image}
                className="w-12 h-12"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <p className="font-bold mb-1 text-base text-right">
                  {course.name}
                </p>
              }
              secondary={
                <p className="text-gray-600 text-sm text-right truncate">
                  {course.description}
                </p>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  )
}
