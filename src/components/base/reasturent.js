import React, { useState } from "react";
import manu from "./manuApi";
import ManuCard from "../base/manuCard";
import { Col, Container, Row } from "react-bootstrap";
import ManuBar from "./manuBar";
import Footer from "../footer";
const uniqList = [
  ...new Set(
    manu.map((item) => {
      return item.catagory;
    })
  ),
  "All",
];
console.log(uniqList);
const Reasturent = () => {
  const [manuData, setManuData] = useState(manu);
  const [manuList] = useState(uniqList);
  const filterItem = (catagory) => {
    if (catagory === "All") {
      setManuData(manu);
      return;
    }
    const upDated = manu.filter((item) => {
      return item.catagory === catagory;
    });
    setManuData(upDated);
  };
  return (
    <>
      <div className="header">
        <Container fluid>
          <Row>
            <Col lg={3}>
              <div className="logo"></div>
            </Col>
            <Col lg={9}>
              <ManuBar filterItem={filterItem} manuList={manuList} />
            </Col>
          </Row>
        </Container>
      </div>
      <ManuCard data={manuData} />
      <Footer />
    </>
  );
};

export default Reasturent;
