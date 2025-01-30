'use client'

import CourseContent from '@/components/CourseContent'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function CoursePageContent() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get('id')

  return <CourseContent id={courseId || ''} />
}

export default function CoursePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoursePageContent />
    </Suspense>
  )
}
