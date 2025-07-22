import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Root from './pages/Root'
import WorkDetail from './pages/WorkDetail'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    errorElement:<NotFound />,
    children:[
      {index:true, element:<Home />},
      {path:'work/:id',element:<WorkDetail/>},
    ],
  },
])

export default function App() {
  return(
    <RouterProvider router={router} />
  )
}
