import { Container, Row, Col } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { useState } from "react";

function Results(props) {
  const [showAmortization, setShowAmortization] = useState(false);
  const [amortizationButtonText, setAmortizationButtonText] = useState(
    "Show Amortization"
  );
  const toggleAmortization = () => {
    setAmortizationButtonText(
      !showAmortization ? "Hide Amortization" : "Show Amortization"
    );
    setShowAmortization(!showAmortization);
  };
  if (
    props.startAge &&
    props.endAge &&
    props.amountSaved &&
    props.monthlySaved &&
    props.interest
  ) {
    let amortTable = null;
    if (showAmortization) {
      amortTable = showAmortizationDisplay(props);
    }
    return (
      <>
        <AmortizationButton
          amortizationButtonText={amortizationButtonText}
          toggleAmortization={toggleAmortization}
        />
        {amortTable}
      </>
    );
  } else {
    return "";
  }
}
function AmortizationButton(props) {
  return (
    <a href="#" onClick={props.toggleAmortization}>
      {props.amortizationButtonText}
    </a>
  );
}
function showAmortizationDisplay(props) {
  let rows = getRows(props);
  console.log(rows);
  const rowElements = rows.map((row) => (
    <ResultsRow
      key={row.monthYear}
      monthYear={row.monthYear}
      balance={row.balance}
      age={row.age}
    ></ResultsRow>
  ));
  return (
    <>
      <Row>
        <Col lg="2">Date</Col>
        <Col lg="2">Balance</Col>
        <Col>Age</Col>
      </Row>
      {rowElements}
    </>
  );
}
function ResultsRow(props) {
  return (
    <Row>
      <Col lg="2">{props.monthYear}</Col>
      <Col lg="2">
        <NumberFormat
          value={props.balance}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Col>
      <Col>{props.age}</Col>
    </Row>
  );
}

function getRows(props) {
  console.log("props;");
  console.log(props);
  let interestRate = props.interest.replace("%", "");
  const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
  console.log("Monthly interstRate:", monthlyInterestRate);
  let balance = parseFloat(
    props.amountSaved.replace("$", "").replace(",", "").replace(".", "")
  );
  let monthlySaved = parseFloat(
    props.monthlySaved.replace("$", "").replace(",", "").replace(".", "")
  );
  console.log("balance:");
  console.log(balance);

  let ResultsRow = [];

  let currentYear = new Date().getFullYear();
  let age = 0;
  for (age = props.startAge; age < props.endAge; age++) {
    let month = 0;
    for (month = 1; month <= 12; month++) {
      balance =
        Math.round(balance * (1 + monthlyInterestRate), 2) + monthlySaved;

      ResultsRow.push({
        monthYear: `${month}/${currentYear}`,
        balance: balance,
        age: age,
      });
    }
    currentYear++;
  }

  return ResultsRow;
}

export default Results;
