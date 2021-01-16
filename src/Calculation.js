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

  return (
    <>
      <h2>{props.acctType}</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            How much {props.acctType} have you saved for retirement?
          </Form.Label>
          <NumberFormat
            placeholder="$1000"
            className="form-control"
            value={props.amountSaved}
            displayType={"input"}
            thousandSeparator={true}
            prefix={"$"}
            onChange={props.amountSavedChanged}
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
            placeholder="$1000"
            value={props.monthlySaved}
            displayType={"input"}
            thousandSeparator={true}
            prefix={"$"}
            onChange={props.monthlySavedChanged}
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
