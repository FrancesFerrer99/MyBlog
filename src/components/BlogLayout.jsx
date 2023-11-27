import { Outlet } from "react-router-dom"
import Carousel from "./Carousel"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <main>
                <Outlet />
            </main>
            <Carousel />
        </div>
    )
}