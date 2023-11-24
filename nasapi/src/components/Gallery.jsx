import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import ImgOfTheDayAt from './ImgOfTheDayAt';
import { Row, Col } from 'react-bootstrap';


export default function Gallery() {

  const today = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(today);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <h1>Gallery</h1>
      <Row>
        <Col md={4}>
          <Form.Group controlId="dob">
            <Form.Label>Selectionnez une date</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Date of Birth" onChange={handleDateChange} />
          </Form.Group>
        </Col>
        <ImgOfTheDayAt slctDate={selectedDate} />
      </Row>
    </div>
  );
}
