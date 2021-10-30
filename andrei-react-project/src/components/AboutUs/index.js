import AboutUsPic from "../../images/about-us.jpg"

import "./styles.scss"

export default function AboutUs() {
    return (
        <div className="about-us-wrapper">
            <div>
                <h2>About Us</h2>
                <div className="section-border">
                    <span></span>
                    <span className="brand-color-border"></span>
                    <span></span>
                </div>
            </div>
            <div className="about-us-explanation">
                <div className="about-us-pic">
                    <img src={AboutUsPic} alt="" className="about-us-img" />
                </div>
                <div className="about-us-description">
                    <div className="about-us-title">
                        <h3>We Are a Totally Integrated Creative Design Agency</h3>
                    </div>
                    <div className="about-us-content"><p>Lorem ipsum dolor ut adipisci in vero ad aut doloribus molestias integrapoaaluptates tempore tempora ullam cumque minus id, odio magninnn Sapente, optio mollitia sint nobis esse. Hic quisquam laudantium cumintr aperiores delectus cum asperiores delectus. We are a totally integratedin creative design agency Contrary to popular belief, Lorem Ipsum is noteqsimply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p></div>
                    <div className="about-us-button">
                        <button>See More</button>
                    </div>
                </div>
            </div>
        </div>

    )
}