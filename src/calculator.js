export const initializeCalculator = () => ({
    displayValue: "",
});
export const resetCalculatorDisplay = (calculatorState) => {
    calculatorState.displayValue = "";
};
export const addInputToDisplay = (calculatorState, value) => {
    calculatorState.displayValue += value;
};
export const computeResultFromDisplay = (calculatorState) => {
    try {
        calculatorState.displayValue = String(new Function(`return ${calculatorState.displayValue}`)());
    }
    catch (error) {
        calculatorState.displayValue = "Error";
    }
};
export const getDisplayValue = (calculatorState) => calculatorState.displayValue;
