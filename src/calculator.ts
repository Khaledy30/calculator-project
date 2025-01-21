type MathOperator = "+" | "-" | "*" | "/" | ".";

interface CalculatorState {
  displayValue: string;
}

export const initializeCalculator = (): CalculatorState => ({
  displayValue: "",
});

export const resetCalculatorDisplay = (
  calculatorState: CalculatorState
): void => {
  calculatorState.displayValue = "";
};

export const addInputToDisplay = (
  calculatorState: CalculatorState,
  value: string | MathOperator
): void => {
  calculatorState.displayValue += value;
};

export const computeResultFromDisplay = (
  calculatorState: CalculatorState
): void => {
  try {
    calculatorState.displayValue = String(
      new Function(`return ${calculatorState.displayValue}`)()
    );
  } catch (error) {
    calculatorState.displayValue = "Error";
  }
};

export const getDisplayValue = (calculatorState: CalculatorState): string =>
  calculatorState.displayValue;
