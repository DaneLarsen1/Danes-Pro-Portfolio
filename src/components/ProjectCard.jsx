import {Card, Button} from "react-bootstrap"
const ProjectCard= ({title, image, description, website, github}) => {
    return (
        <Card style={{width: '24em', margin: '1em'}}>
            <Card.Title>{title}</Card.Title>
            <Card.Body>
            <Card.Img src={image}></Card.Img>
            <Card.Text>{description}</Card.Text>
            <Button href={website}>Website</Button>
            <Button href={github}>Github</Button>
            </Card.Body>
        </Card>
    )
}
export default ProjectCard