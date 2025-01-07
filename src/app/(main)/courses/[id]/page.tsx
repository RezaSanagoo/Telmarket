interface CoursePageProps {
    params: {
      id: string
    }
  }
  
  export default function CoursePage({ params }: CoursePageProps) {
    return (
      <div>
        <h1>Course {params.id} Page</h1>
      </div>
    )
  }
  