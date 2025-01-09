import CourseContent from '@/components/CourseContent'

// Generate static pages for courses 1-10
export function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1)
  }))
}

export default function CoursePage({ params }: { params: { id: string } }) {
  return <CourseContent id={params.id} />
}
