import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Steps />}
    </div>
  );
}

function ToggleButton({ isOpen, setIsOpen }) {
  return (
    <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
      {isOpen ? "\u2716" : "\u2714"}
    </button>
  );
}

function Steps() {
  const [step, setstep] = useState(1);

  function increaseStep() {
    // Increase the step by 1
    if (step < 3) setstep((currentStep) => currentStep + 1);
  }

  function decreaseStep() {
    // Decrease the step by 1
    if (step > 1) setstep((currentStep) => currentStep - 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#35ff21", color: "#000" }}
          onClick={decreaseStep}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#35ff21", color: "#000" }}
          onClick={increaseStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}
