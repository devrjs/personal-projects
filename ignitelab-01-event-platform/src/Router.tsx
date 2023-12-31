import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import { Event } from "./pages/Event"
import { Subscribe } from "./pages/Subscribe"

export const Router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Subscribe />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/event/lesson/:slug",
    element: <Event />,
  },
])
