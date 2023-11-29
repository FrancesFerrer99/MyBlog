import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Carousel from "./Carousel"

export default function Layout() {

    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Carousel />
            <Footer />
        </div>
    )
}