// app/router.js (formerly routes.js)
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './Rootlayout'
import Gallery from '../pages/Gallery.jsx'

const Home = lazy(() => import('../pages/Home.jsx'))
const Service = lazy(() => import('../pages/Service.jsx'))
const Contact = lazy(() => import('../pages/Contact.jsx'))
const About = lazy(() => import('../pages/About.jsx'))
const ProjectDetails = lazy(() => import('../pages/ProjectDetails.jsx'))
const Project = lazy(() => import('../pages/Project.jsx'))

const router = createBrowserRouter([
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
], {
  basename: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '/'
})

export default router