import React from "react";
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import Layout from "./Component/Layout.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import Skills from "./pages/Skills.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route  index element={<About/>}/>
        <Route path="skills" element={<Skills/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path="contacts" element={<Contacts/>}/>
    </Route>
))

export default function App(){
    return (
        <RouterProvider router={router}/>
    )
}