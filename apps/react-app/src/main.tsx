import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './base.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Typography from './typography.tsx'
import Spacing from './spacing.tsx'
import Colors from './colors.tsx'
import Radius from './radius.tsx'
import Shadows from './shadows.tsx'
import Animations from './animations.tsx'
import Buttons from './buttons.tsx'
import Links from './links.tsx'
import Inputs from './inputs.tsx'
import SamplePage from './SamplePage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/typography', element: <Typography /> },
  { path: '/spacing', element: <Spacing /> },
  { path: '/colors', element: <Colors /> },
  { path: '/radius', element: <Radius /> },
  { path: '/shadows', element: <Shadows /> },
  { path: '/animations', element: <Animations /> },
  { path: '/buttons', element: <Buttons /> },
  { path: '/links', element: <Links /> },
  { path: '/inputs', element: <Inputs /> },
  { path: '/sample', element: <SamplePage /> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
