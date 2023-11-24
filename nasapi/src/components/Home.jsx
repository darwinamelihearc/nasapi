import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/Home.css";
import ImgOfTheDay from './ImgOfTheDay';
import { Container } from 'react-bootstrap';

export default function Home() {

    return (
        <div>
            <Container fluid>
                <h1>Nasapi</h1>
                <p>Some text here ?</p>
            </Container>
            <ImgOfTheDay />
        </div>
    );
}
