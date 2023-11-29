import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Layout from "./components/Layout"
import HtmlCssBlog from "./pages/blogs/HtmlcssBlog"
import JavaScriptBlog from "./pages/blogs/JavaScriptBlog"
import ReactBlog from "./pages/blogs/ReactBlog"
import ResponsiveDesignBlog from "./pages/blogs/ResponsiveDesign"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />   
            <Route path="contacts" element={<Contacts />} /> 
            <Route path="htmlcss" element={<HtmlCssBlog />} />
            <Route path="javascript" element={<JavaScriptBlog />} />
            <Route path="react" element={<ReactBlog />} />
            <Route path="responsivedesign" element={<ResponsiveDesignBlog />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
