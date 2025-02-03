import {
  initializeCalculator,
  resetCalculatorDisplay,
  addInputToDisplay,
  computeResultFromDisplay,
  getDisplayValue,
} from "./calculator.js";

export function initializeUI() {
  const calculatorState = initializeCalculator();
  const display = document.getElementById("result") as HTMLInputElement;

  document.querySelector(".buttons")?.addEventListener("click", (e) => {
    const button = e.target as HTMLButtonElement;
    if (button.tagName === "BUTTON") {
      const action = button.dataset.action;
      const value = button.dataset.value;

      switch (action) {
        case "number":
          addInputToDisplay(calculatorState, value || "");
          break;
        case "operator":
          addInputToDisplay(calculatorState, value || "");
          break;
        case "equals":
          computeResultFromDisplay(calculatorState);
          break;
        case "clear":
          resetCalculatorDisplay(calculatorState);
          break;
        case "plus-minus":
          const currentValue = getDisplayValue(calculatorState);
          if (currentValue !== "") {
            resetCalculatorDisplay(calculatorState);
            addInputToDisplay(
              calculatorState,
              String(-parseFloat(currentValue))
            );
          }
          break;
      }
      display.value = getDisplayValue(calculatorState) || "0";
    }
  });

  display.value = "0";
}
