import module2Img from '../../assets/module2.png'
import module4Img from '../../assets/Section4.png'
import soloProject1 from '../../assets/soloproject1.png'

export default function HtmlCssBlog() {
    return (
        <section>
            <div className="blog">
                <h1 className='blog-title'>Html & CSS foundamentals</h1>
                <h2 className="date">November 23, 2023</h2>
                <h3>Building the Foundation: A Beginner's Guide to Mastering HTML and CSS Essentials for Web Development.</h3>
                <p>
                    The basics of Html and Css are covered in 2 section of the course.
                    This first section of the course gives a foundation of Html and CSS to be able to start creating static web pages.
                    You will build 3 sites giving particular attention to HTML tags and CSS properties like margins, paddings and flexbox.
                    The othe section will dive slightly deeper into CSS with concepts like relative and absolute positioning and compount selectors.
                </p>
                <h3 className='subtitle'>
                    Solo project: Hometown homepage
                </h3>
                <p>
                    This is the first solo project of the course and we're tasked to build a presentation site of our city.
                    The main scope of this project is to put into use what we've learned in the section with positioning and flexbox
                    being the the hardest topics.
                    Like all solo projects of the course there's requirements and stretch goals.
                    We're also given a Figma design to follow.
                </p>
                <h3 className='subtitle'>
                    Solo project: Oldagram
                </h3>
                <p>
                    This is the first solo project of the course and we're tasked to build a presentation site of our city.
                    The main scope of this project is to put into use what we've learned in the section with positioning and flexbox
                    being the the hardest topics.
                    Like all solo projects of the course there's requirements and stretch goals.
                    We're also given a Figma design to follow.
                </p>
                <img 
                    src={soloProject1}
                    alt='Requirements and preview of the solo project'
                    className='soloproject-img'
                />
                <img 
                    src={module2Img}
                    alt='Section 4 of the Scrimba Frontend dev path'
                    className='blog-img'
                />
                <img 
                    src={module4Img}
                    alt='Section 2 of the Scrimba Frontend dev path'
                    className='blog-img'
                />
            </div>
        </section>
    )
}