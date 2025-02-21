'use client'

import { List, ListItem, ListItemAvatar, Avatar, ListItemText, CircularProgress } from '@mui/material'
import { useRouter } from 'next/navigation'
import Search from "@mui/icons-material/Search"
import { useState, useEffect } from 'react'
import axiosInstance from '@/utils/axiosInstance'

interface Course {
  id: number
  name: string
  description: string
  image: string
}

export default function CoursesPage() {
  const router = useRouter()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchCourses = async () => {
    try {
      // First try to load from cache
      const cached = localStorage.getItem('courses')
      if (cached) {
        setCourses(JSON.parse(cached))
      }

      // Then fetch fresh data
      const response = await axiosInstance.get<Course[]>('/api/channel/detail')
      setCourses(response.data)
      localStorage.setItem('courses', JSON.stringify(response.data))
      
    } catch (error) {
      console.error('Error fetching courses:', error)
      localStorage.removeItem('token')
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [router])

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-148px)] flex justify-center items-center">
        <CircularProgress />
      </div>
    )
  }

  return (
    <>
      <div className="relative w-full h-[60px] p-3 pt-4 pb-1">
        <div className="flex items-center w-full h-full px-4 bg-[#ECECEC] rounded-[9px] gap-4">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="جستجو"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[20px] bg-transparent outline-none font-iranYekan text-right placeholder:text-gray-500"
          />
        </div>
      </div>
      <List className="w-full bg-white">
        {filteredCourses.map((course) => (
          <ListItem 
            key={course.id}
            alignItems="flex-start"
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => router.push(`/courses/course?id=${course.id}`)}
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