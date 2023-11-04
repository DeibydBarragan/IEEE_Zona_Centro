import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import words from '../Components/utils/words';

const WordCloud = () => {
    const word2 = words.map((d) => ({
        text: d.Text,
        value: d.Value
    }));
    return (
        <>
            <div>
                <Container>
                    <Row>
                        {/* <Col xs={12} md={4}>1 of 2</Col> */}
                        {/* <Col xs={12} md={8}> */}
                        <ReactWordcloud
                            words={word2}
                            options={{
                                fontSizes: [20, 80],
                                rotations: 0,
                                enableOptimizations: true,
                                fontStyle: "normal",
                                fontWeight: "normal",
                                padding: 10,
                                scale: "sqrt",
                                transitionDuration: 1000,
                                enableTooltip: true,
                                deterministic: false,
                                fontFamily: "Raleway",
                            }}
                        />
                        {/* </Col> */}
                    </Row>
                </Container>


            </div>
        </>
    )
}
export default WordCloud 