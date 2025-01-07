export function generateStaticParams() {
  // Generate static pages for courses with IDs 1 through 10
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1)
  }))
}

export default function CoursePage({ params }: { params: { id: string } }) {
  return (
    <div>
      Course ID: {params.id}
    </div>
  )
}
