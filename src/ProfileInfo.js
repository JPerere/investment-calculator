import NumberFormat from "react-number-format";
import { Form } from "react-bootstrap";
import React, { useState } from "react";

function ProfileInfo() {
  const [startAge, setStartAge] = useState(0);
  const startAgeChanged = (e) => setStartAge(e.target.value);

  const [endAge, setEndAge] = useState(0);
  const endAgeChanged = (e) => setEndAge(e.target.value);

  const [percent, setPercent] = useState(0);
  const percentChanged = (e) => setPercent(e.target.value);

  return (
    <>
      <h1>Investment Calculator</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter your current age.</Form.Label>
          <NumberFormat
            className="form-control"
            value={startAge}
            displayType={"input"}
            onChange={startAgeChanged}
            decimalScale="0"
            allowNegative={false}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter the age you plan to retire.</Form.Label>
          <NumberFormat
            className="form-control"
            value={endAge}
            displayType={"input"}
            onChange={endAgeChanged}
            decimalScale="0"
            allowNegative={false}
          />
          <Form.Text className="text-muted">
            If you were born in 1960 or later, 67 years old is the age at which
            you can retire with full benefits.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>What do you think your annual return will be?</Form.Label>
          <NumberFormat
            className="form-control"
            value={percent}
            displayType={"input"}
            thousandSeparator={false}
            onChange={percentChanged}
            suffix="%"
            decimalScale="2"
          />
          <Form.Text className="text-muted">
            This is the return your investment will generate over time.
            Historically, the 30-year return of the S&amp;P 500 has been roughly
            12%.
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
}

export default ProfileInfo;
