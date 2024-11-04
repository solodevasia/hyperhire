import React from 'react'
import {createRoot} from 'react-dom/client'
import "../static/tailwind.scss"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import IndexPage from './pages/IndexPage'

const dom = createRoot(document.getElementById("root") as HTMLElement)

dom.render(
    <RouterProvider router={createBrowserRouter([{
        path: '/',
        element: <IndexPage/>
    }])}/>
)