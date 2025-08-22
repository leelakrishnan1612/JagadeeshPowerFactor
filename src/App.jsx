import { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'


// Import components
import RootLayout from './app/RootLayout' // or './app/Rootlayout' if that's your filename
import Gallery from './pages/Gallery.jsx'
import ScrollToTop from './app/ScrollToTop.jsx'

// Lazy load components
const Home = lazy(() => import('./pages/Home.jsx'))
const Service = lazy(() => import('./pages/Service.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'))
const Project = lazy(() => import('./pages/Project.jsx'))

// Define routes directly in this file
const routes = [
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <Service /> },
      { path: '/about', element: <About /> },
      { path: '/project', element: <Project /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/project/:projectId', element: <ProjectDetails /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]

export default function App() {
  const element = useRoutes(routes)
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg">Loading...</div>
        </div>
      }>
        {element}
      </Suspense>
    </>
  )
}