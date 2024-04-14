import ProjectCard from "../components/ProjectCard"
import CodeQuiz from "../assets/images/Code-Quiz.png"
import HolidayProject from "../assets/images/Holiday-Project.png"
import NoteTaker from "../assets/images/Note-Taker.png"
import Meeting from "../assets/images/Meeting.jpg"
import Affirm from "../assets/images/Affirm.png"
import GoogleBooks from "../assets/images/Google-Books.png"
import { Row, Col } from "react-bootstrap"
const Projects=()=>{
    const myProjects= [{
        id:1,
        title: "Coding Quiz",
        description: "This website is an amazing tool for any programmer wishing to advance there skills. Just adapt the code ive written for you and create your own questions!",
        image: CodeQuiz,
        website: "",
        github: "",

    }, {
        id:2,
        title: "Project 2",
        description: "Holiday Tunes delivers customized playlists for any holiday at the click of a button. Select a holiday and enjoy music that perfectly complements your celebrations.",
        image: HolidayProject,
        website: "",
        github: "",     
    }, {
        id:3,
        title: "Note Taker-3000",
        description: "Note Taker-3000 is an intuitive app that allows you to write, edit, and delete notes for all your to-do tasks. Keep your daily responsibilities organized and easily manageable with just a few taps.",
        image: NoteTaker,
        website: "",
        github: "",
    }, {
        id:4,
        title: "Horiseon",
        description: "Took this broken website and reformatted, re-coded, and overall made this site easier for coders to navigate.",
        image: Meeting,
        website: "",
        github: "",
    }, {
        id:5,
        title: "Affirm",
        description: "Affirm is a digital journal that helps you set and affirm your goals every day. Enter your aspirations, and the site will guide you in positively affirming them daily to boost motivation and focus.",
        image: Affirm,
        website: "",
        github: "",
    }, {
        id:6,
        title: "Google Books",
        description: "Google Books is a comprehensive search platform where you can discover and explore books across all genres. Easily search for any title, and add it to your favorites to create a personalized reading list.",
        image: GoogleBooks,
        website: "",
        github: "",
    }]

    return (
        <section>
            <Row>
                <Col>
                <h2>Projects</h2>
                </Col>
            </Row>
            <Row style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    myProjects.map(project => (
                        <ProjectCard title={project.title} image={project.image} description={project.description} website={project.website} github={project.github}/>
                    ))
                }
            </Row>
        </section>
    )
}
export default Projects