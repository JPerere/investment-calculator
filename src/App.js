import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

import Calculation from "./Calculation";
import AccountType from "./Constants";
import ProfileInfo from "./ProfileInfo";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Results from "./Results";

function App() {
  const [amountRothSaved, setAmountRothSaved] = useState("");
  const [monthlyRothSaved, setMonthlyRothSaved] = useState("");
  const [amountSaved, setAmountSaved] = useState("");
  const [monthlySaved, setMonthlySaved] = useState("");
  const [startAge, setStartAge] = useState("");
  const [endAge, setEndAge] = useState("");
  const [percent, setPercent] = useState("");
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const handleCloseReset = () => setShowConfirmReset(false);
  const handleShowReset = () => setShowConfirmReset(true);

  const resetValues = () => {
    setAmountRothSaved("");
    setMonthlyRothSaved("");
    setAmountSaved("");
    setMonthlySaved("");
    setStartAge("");
    setEndAge("");
    setPercent("");
    handleCloseReset();
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <ProfileInfo
              startAge={startAge}
              startAgeChanged={(e) => setStartAge(e.target.value)}
              endAge={endAge}
              endAgeChanged={(e) => setEndAge(e.target.value)}
              percent={percent}
              percentChanged={(e) => setPercent(e.target.value)}
            ></ProfileInfo>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="6">
            <Calculation
              amountSaved={amountRothSaved}
              amountSavedChanged={(e) => setAmountRothSaved(e.target.value)}
              monthlySaved={monthlyRothSaved}
              monthlySavedChanged={(e) => setMonthlyRothSaved(e.target.value)}
              acctType={AccountType.PostTax}
            ></Calculation>
            <Results
              startAge={startAge}
              endAge={endAge}
              amountSaved={amountRothSaved}
              monthlySaved={monthlyRothSaved}
              interest={percent}
            ></Results>
          </Col>
          <Col sm="12" md="6">
            <Calculation
              amountSaved={amountSaved}
              amountSavedChanged={(e) => setAmountSaved(e.target.value)}
              monthlySaved={monthlySaved}
              monthlySavedChanged={(e) => setMonthlySaved(e.target.value)}
              acctType={AccountType.PreTax}
            ></Calculation>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" onClick={handleShowReset}>
              Reset
            </Button>
            <Button variant="primary" className="ml-2">
              Calculate
            </Button>
          </Col>
        </Row>
        <Modal show={showConfirmReset} onHide={handleCloseReset}>
          <Modal.Header closeButton>
            <Modal.Title>Reset Values</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to reset all form values?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseReset}>
              Cancel
            </Button>
            <Button variant="primary" onClick={resetValues}>
              Reset Values
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default App;
