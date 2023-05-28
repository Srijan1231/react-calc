import { Button } from "./Button";
import { useState } from "react";

const Calculator = () => {
  const buttons = [
    {
      className: "ac",
      label: "AC",
    },
    {
      className: "c",
      label: "←",
    },
    {
      className: "perc",
      label: "%",
    },
    {
      className: "divide",
      label: "/",
    },
    {
      className: "7",
      label: "7",
    },
    {
      className: "8",
      label: "8",
    },
    {
      className: "9",
      label: "9",
    },
    {
      className: "x",
      label: "*",
    },
    {
      className: "4",
      label: "4",
    },
    {
      className: "5",
      label: "5",
    },
    {
      className: "6",
      label: "6",
    },
    {
      className: "minus",
      label: "-",
    },
    {
      className: "1",
      label: "1",
    },
    {
      className: "2",
      label: "2",
    },
    {
      className: "3",
      label: "3",
    },
    {
      className: "plus",
      label: "+",
    },
    {
      className: "0",
      label: "0",
    },
    {
      className: "dot",
      label: ".",
    },
    {
      className: "equals",
      label: "=",
    },
  ];
  const operators = ["+", "-", "*", "%", "/"];
  const [strToDisplay, setStrToDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  const handleButtonClick = (val) => {
    console.log(val);

    if (val === "AC") {
      return setStrToDisplay("");
    }

    if (val === "←") {
      return setStrToDisplay(strToDisplay.slice(0, -1));
    }
    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      let tempStringValue = strToDisplay;
      if (operators.includes(lastChar)) {
        tempStringValue = setStrToDisplay(strToDisplay.slice(0, -1));
      }
      const total = eval(tempStringValue);
      return setStrToDisplay(total.toString());
    }
    if (operators.includes(val)) {
      //below !strtodisplay will not let user to start with operators
      if (!strToDisplay) {
        return;
      }
      let tempStringValue = strToDisplay;
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        tempStringValue = strToDisplay.slice(0, -1);
      }
      setStrToDisplay(tempStringValue + val);
      setLastOperator(val);
      return;
    }
    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
        const numberAfterLastOperator = strToDisplay.slice(operatorIndex);
        if (numberAfterLastOperator.includes(".")) {
          return;
        }
      }
      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }

    setStrToDisplay(strToDisplay + val);

    //Track the value of the last operator
  };

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">{strToDisplay}</div>
        {buttons.map((item, index) => (
          <Button
            key={index}
            className={item.className}
            label={item.label}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};
export default Calculator;
