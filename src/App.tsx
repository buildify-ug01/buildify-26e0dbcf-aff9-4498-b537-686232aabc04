
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'
import './App.css'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const GolferProfile = lazy(() => import('./pages/GolferProfile'))
const News = lazy(() => import('./pages/News'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        } />
        <Route path="golfer/:id" element={
          <Suspense fallback={<LoadingSpinner />}>
            <GolferProfile />
          </Suspense>
        } />
        <Route path="news" element={
          <Suspense fallback={<LoadingSpinner />}>
            <News />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        } />
      </Route>
    </Routes>
  )
}

export default App