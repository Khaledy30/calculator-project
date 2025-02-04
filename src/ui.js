import { initializeCalculator, resetCalculatorDisplay, addInputToDisplay, computeResultFromDisplay, getDisplayValue, } from "./calculator.js";
export function initializeUI() {
    var _a;
    const calculatorState = initializeCalculator();
    const display = document.getElementById("result");
    (_a = document.querySelector(".buttons")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
        const button = e.target;
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
                        addInputToDisplay(calculatorState, String(-parseFloat(currentValue)));
                    }
                    break;
            }
            display.value = getDisplayValue(calculatorState) || "0";
        }
    });
    display.value = "0";
}
