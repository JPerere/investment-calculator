import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import React, { useState } from "react";
import NumberFormat from "react-number-format";
import AccountType from "./Constants";

function Calculation(props) {
  function convertToNumber(val) {
    if (!val) {
      return "";
    }
    return parseFloat(val.replace(/\$|,/g, ""));
  }
  const [amountSaved, setAmountSaved] = useState(0);
  const amountSavedChanged = (e) => setAmountSaved(e.target.value);

  const [monthlySaved, setMonthlySaved] = useState(0);
  const monthlySavedChanged = (e) => setMonthlySaved(e.target.value);

  return (
    <>
      <h2>{props.acctType}</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            How much {props.acctType} have you saved for retirement?
          </Form.Label>
          <NumberFormat
            className="form-control"
            value={amountSaved}
            displayType={"input"}
            thousandSeparator={true}
            prefix={"$"}
            onChange={amountSavedChanged}
            decimalScale="0"
          />
          <Form.Text className="text-muted">
            This should be the total of all your retirement accounts including
            401(k)s, IRAs, 403(b)s, etc.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            How much {props.acctType} will you contribute monthly?
          </Form.Label>
          <NumberFormat
            className="form-control"
            value={monthlySaved}
            displayType={"input"}
            thousandSeparator={true}
            prefix={"$"}
            onChange={monthlySavedChanged}
            decimalScale="0"
          />
          <Form.Text className="text-muted">
            This is the amount you add to your retirement savings each month.
            Ideally, you should save 15% of your pay toward retirement.
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
}

export default Calculation;
