import htmlcssImg from '../assets/html-css.jpg'
import javascriptImg from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import responsiveDesignImg from '../assets/responsive-design.jpg'

export default function Home() {
    return (
        <main>
            <div className="hero">
                <h1>My journey as a Scrimba student</h1>
                <p className="date">
                    November 23, 2023
                </p>
                <p>
                My Scrimba journey transformed my web development skills.
                From HTML basics to advanced JavaScript, interactive courses made learning dynamic.
                Join me as I share highs and breakthroughs in this empowering educational journey.
                </p>
            </div>
            <div className="blog-wrapper">
                <section className="blog-preview">
                    <h2>Html & CSS basics</h2>
                    <p className="date">November 23, 2023</p>
                    <img 
                        className="preview-img" 
                        src={htmlcssImg}
                        alt="blog preview image"
                    />
                    <p>Building the Foundation: A Beginner's Guide to Mastering HTML and CSS Essentials for Web Developmen.</p>
                </section>
                <section className="blog-preview">
                    <h2>Javascript</h2>
                    <p className="date">November 23, 2023</p>
                    <img 
                        className="preview-img" 
                        src={javascriptImg}
                        alt="blog preview image"
                    />
                    <p>Elevating Web Interactivity: Unleashing the Potential of JavaScript in Modern Development.</p>
                </section>
                <section className="blog-preview">
                    <h2>Responsive design</h2>
                    <p className="date">November 23, 2023</p>
                    <img 
                        className="preview-img" 
                        src={responsiveDesignImg}
                        alt="blog preview image"
                    />
                    <p>Mastering the Digital Landscape: Embracing the Mobile-First Revolution in Responsive Design.</p>
                </section>
                <section className="blog-preview">
                    <h2>React</h2>
                    <p className="date">November 23, 2023</p>
                    <img 
                        className="preview-img" 
                        src={reactImg}
                        alt="blog preview image"
                    />
                    <p>Revolutionizing Web Development: Unveiling the Power and Simplicity of React.js</p>
                </section>
            </div>
        </main>
    )
}