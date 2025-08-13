import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './app/routes'
import ScrollToTop from './app/ScrollToTop'

export default function App() {
  const element = useRoutes(routes)
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        {element}
      </Suspense>
    </>
  )
}