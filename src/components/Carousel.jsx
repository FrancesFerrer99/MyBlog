import htmlcssImg from '../assets/html-css.jpg'
import javascriptImg from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import responsiveDesignImg from '../assets/responsive-design.jpg'
import gettingAJob from '../assets/getting-job.jpg'
import { NavLink, useLocation } from 'react-router-dom'

export default function Carousel() {
    const location = useLocation()
    const conditionalStyle = `blog-wrapper ${location.pathname != '/' ? 'mini' : ''}`

    return (
        <div className={conditionalStyle}>
            {/*location != "" && <h1>Other articles</h1>*/}
            <section className={`blog-preview ${location.pathname == "/htmlcss" ? 'hidden' : ''} `}>
                <NavLink to="htmlcss">
                    <h2>Html & CSS basics</h2>
                    <p className="date">November 23, 2023</p>
                    <img 
                        className="preview-img" 
                        src={htmlcssImg}
                        alt="blog preview image"
                    />
                    <p>Building the Foundation: A Beginner's Guide to Mastering HTML and CSS Essentials for Web Developmen.</p>
                </NavLink>
            </section>
            <section className={`blog-preview ${location.pathname == "/javascript" ? 'hidden' : ''} `}>
                <NavLink to="/javascript">
                    <h2>Javascript</h2>
                    <p className="date">November 23, 2023</p>
                    <img 
                        className="preview-img" 
                        src={javascriptImg}
                        alt="blog preview image"
                    />
                    <p>Elevating Web Interactivity: Unleashing the Potential of JavaScript in Modern Development.</p>
                </NavLink>
            </section>
            <section className={`blog-preview ${location.pathname == "/responsivedesign" ? 'hidden' : ''} `}>
                <NavLink to="/responsivedesign">
                    <h2>Responsive design</h2>
                    <p className="date">November 23, 2023</p>
                    <img 
                        className="preview-img" 
                        src={responsiveDesignImg}
                        alt="blog preview image"
                    />
                    <p>Mastering the Digital Landscape: Embracing the Mobile-First Revolution in Responsive Design.</p>
                </NavLink>
            </section>
            <section className={`blog-preview ${location.pathname == "/react" ? 'hidden' : ''} `}>
                <NavLink to="/react">
                    <h2>React</h2>
                    <p className="date">November 23, 2023</p>
                    <img 
                        className="preview-img" 
                        src={reactImg}
                        alt="blog preview image"
                    />
                    <p>Revolutionizing Web Development: Unveiling the Power and Simplicity of React.js</p>
                </NavLink>
            </section>
            <section className={`blog-preview ${location.pathname == "/gettingajob" ? 'hidden' : ''} `}>
                <NavLink to="/gettingajob">
                    <h2>Getting a job</h2>
                    <p className="date">November 23, 2023</p>
                    <img 
                        className="preview-img" 
                        src={gettingAJob}
                        alt="blog preview image"
                    />
                    <p>Mastering the Art of Landing Your Dream Job</p>
                </NavLink>
            </section>
        </div>
    )
}