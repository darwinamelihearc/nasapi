import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HttpClient from "./HttpClient"
import "./styles/ImgOfTheDay.css";

export default function InsightWeather() {
    const [insightWeather, setInsightWeather] = useState(null);

    useEffect(() => {
        HttpClient.getMarsWeather()
            .then(response => {
                setInsightWeather(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log(insightWeather);
    return (
        <div>
            <Row>
                {insightWeather && (
                    <div>

                    </div>
                )}
            </Row>
        </div>
    )
}