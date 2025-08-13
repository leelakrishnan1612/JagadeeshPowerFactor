import { lazy } from 'react'
import RootLayout from './Rootlayout'
import Gallery from '../pages/Gallery.jsx'


const Home = lazy(() => import('../pages/Home.jsx'))
const Service = lazy(() => import('../pages/Service.jsx'))
const Contact = lazy(() => import('../pages/Contact.jsx'))
const NotFound = lazy(() => import('../pages/NotFound.jsx'))
const About = lazy(() => import('../pages/About.jsx'))
const ProjectDetails = lazy(() => import('../pages/ProjectDetails.jsx'))

export default [
    {
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'services', element: <Service /> },
            { path: 'about', element: <About /> },
            { path: 'gallery', element: <Gallery /> },
            { path: 'project/:projectId', element: <ProjectDetails /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <NotFound /> },
        ],
    },
]