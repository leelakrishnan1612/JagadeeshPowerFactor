import { RouterProvider } from 'react-router-dom'
import router from './app/router' // Your router file with createBrowserRouter
import ScrollToTop from './app/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouterProvider router={router} />
    </>
  )
}
