import { Routes, Route, Navigate } from 'react-router-dom'
import ExplorePage from './(main)/explore/page'
import SearchPage from './(main)/search/page'
import PricesPage from './(main)/prices/page'
import ProfilePage from './(main)/profile/page'
import CoursesPage from './(main)/courses/page'
import LoginPage from './(auth)/login/page'
import RegisterPage from './(auth)/register/page'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/explore" replace />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
