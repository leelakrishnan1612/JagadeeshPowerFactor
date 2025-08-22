import { RouterProvider } from 'react-router-dom'
import router from './app/routes'
import ScrollToTop from './app/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouterProvider router={router} />
    </>
  )
}
