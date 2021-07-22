import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const ManuCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="resturent">
        <Container>
          <Row>
            {data.map((item, index) => (
              <Col lg={4} key={index}>
                <div className="card">
                  <img className="manuImg" src={item.images} alt="" />
                  <div className="cardNumber">
                    <Row>
                      <Col lg={8}>
                        <h2 className="catagory">{item.name}</h2>
                      </Col>
                      <Col lg={4}>
                        <h2 className="price">Rs:{item.price}/-</h2>
                      </Col>
                    </Row>
                  </div>
                  <div className="cardTitle">
                    <h2>
                      <span className="cate">category_</span>
                      {item.catagory}
                    </h2>
                  </div>
                  <div className="cardDescripton">{item.descrip}</div>
                  <span className="cardRead">Read more...</span>
                  <button className="orderNow">order now </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ManuCard;
