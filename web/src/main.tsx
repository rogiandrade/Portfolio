import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkModeProvider } from './contexts/colorsProvider.tsx'
import { HeaderProvider } from './contexts/headerProvider.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './components/home.tsx'
import { About } from './components/about.tsx'
import { Header } from './components/header.tsx'
import { Services } from './components/services.tsx'

const router = createBrowserRouter([
  {path: "/", 
    element: <Header />,
    children:
      [{
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <HeaderProvider>
        <RouterProvider router={router} />
      </HeaderProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)
