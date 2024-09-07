import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChangeInput={handleChange} />;
      {!inputIsValid && (
        <p className="center">Please enter a valid duration (1 year or more)</p>
      )}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
