import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Layout from "./components/Layout"
import HtmlCssBlog from "./pages/blogs/htmlcssBlog"
import JavaScriptBlog from "./pages/blogs/javascriptBlog"
import ReactBlog from "./pages/blogs/ReactBlog"
import ResponsiveDesignBlog from "./pages/blogs/responsiveDesign"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />   
            <Route path="contacts" element={<Contacts />} /> 

            <Route path="/blogs" element={<BlogLayout />}>
              <Route path="/blogs/blog1" element={<HtmlCssBlog />} />
              <Route path="/blogs/blog2" element={<JavaScriptBlog />} />
              <Route path="/blogs/blog3" element={<ReactBlog />} />
              <Route path="/blogs/blog4" element={<ResponsiveDesignBlog />}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
