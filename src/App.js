import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

import Calculation from "./Calculation";
import AccountType from "./Constants";
import ProfileInfo from "./ProfileInfo";
import { Button } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <ProfileInfo></ProfileInfo>
        </Col>
      </Row>
      <Row>
        <Col>
          <Calculation acctType={AccountType.PostTax}></Calculation>
        </Col>
        <Col>
          <Calculation acctType={AccountType.PreTax}></Calculation>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary">Reset</Button>
          <Button variant="primary">Calculate</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
