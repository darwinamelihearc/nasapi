import { useEffect, useState } from 'react';
import HttpClient from "./HttpClient"
import { Container, Image, Row, Col } from 'react-bootstrap';
import "./styles/ImgOfTheDay.css";

export default function ImgOfTheDayAt({ slctDate }) {
    const [imageOfTheDayAt, setImageOfTheDayAt] = useState(null);

    useEffect(() => {
        HttpClient.getPictureOfTheDayAt(slctDate)
            .then(response => {
                setImageOfTheDayAt(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });

    return (
        <div>
            <Row>
                {imageOfTheDayAt && (
                    <div>
                        <Container>
                            <Row>
                                <Col sm={8}>

                                    <Image src={imageOfTheDayAt.url} rounded fluid alt={imageOfTheDayAt.title} />
                                </Col>
                                <Col sm={4}>
                                    <h2>{imageOfTheDayAt.title}</h2>
                                    <p>{imageOfTheDayAt.explanation}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </Row>
        </div>
    )
}