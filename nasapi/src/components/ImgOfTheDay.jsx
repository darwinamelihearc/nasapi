import { useEffect, useState } from 'react';
import HttpClient from "./HttpClient"
import { Container, Image, Row, Col } from 'react-bootstrap';
import "./styles/ImgOfTheDay.css";

export default function ImgOfTheDay() {
  const [imageOfTheDay, setImageOfTheDay] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    HttpClient.getPictureOfTheDay()
      .then(response => {
        setImageOfTheDay(response.data);
        setError(null);
      })
      .catch(error => {
        setError("Une erreur s'est produit lors de l'appel à l'API");
      });
  }, []); 

  return (
    <div>
      <Row>
        {imageOfTheDay && (
          <div>
            <Container>
              <Row>
                <Col sm={8}>
                  {error ? (
                    <Image src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss068e054895_orig.jpg" rounded fluid alt="Image de remplacement" />
                  ) : (
                    <Image src={imageOfTheDay.url} rounded fluid alt={imageOfTheDay.title} />
                  )}
                </Col>
                <Col sm={4}>
                  <h2>{imageOfTheDay.title}</h2>
                  <p>{imageOfTheDay.explanation}</p>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Row>
    </div>
  )
}