import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    bill: 0,
    percent: 0,
    customer: 0,
  });
  return (
    <div className="App">
      <input
        placeholder="Bill"
        type={"number"}
        name="bill"
        onChange={(e) => setValue({ ...value, bill: e.target.value })}
      />
      <input
        placeholder="Percent"
        type={"number"}
        name="percent"
        onChange={(e) => setValue({ ...value, percent: e.target.value })}
      />
      <input
        placeholder="Customers"
        type={"number"}
        name="customer"
        onChange={(e) => setValue({ ...value, customer: e.target.value })}
      />

      <h1>
        Result:&nbsp;
        <span>{value.percent ? (value.bill * value.percent) / 100 : "-"}</span>
      </h1>
      <h1>
        Person Result:&nbsp;
        <span>
          {value.p ? (value.percent * value.result) / 100 / value.result : "-"}
        </span>
      </h1>
    </div>
  );
}

export default App;
