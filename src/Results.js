import { Container, Row, Col } from "react-bootstrap";

function Results(props) {
  if (
    props.startAge &&
    props.endAge &&
    props.amountSaved &&
    props.monthlySaved &&
    props.interest
  ) {
    let rows = getRows(props);
    console.log(rows);
    const rowElements = rows.map((row) => (
      <ResultsRow
        month={row.month}
        balance={row.balance}
        age={row.age}
      ></ResultsRow>
    ));
    return rowElements;
  } else {
    return "";
  }
}

function ResultsRow(props) {
  return (
    <Row>
      <Col lg="6">
        {props.month}&nbsp;&nbsp;&nbsp;
        {props.balance}&nbsp;&nbsp;&nbsp;
        {props.age}
      </Col>
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
        month: `${month}/${currentYear}`,
        balance: balance,
        age: age,
      });
    }
    currentYear++;
  }

  return ResultsRow;
}

export default Results;
