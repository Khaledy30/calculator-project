import {
  initializeCalculator,
  resetCalculatorDisplay,
  addInputToDisplay,
  computeResultFromDisplay,
  getDisplayValue,
} from "../src/calculator";

describe("Calculator", () => {
  let calculator: ReturnType<typeof initializeCalculator>;

  beforeEach(() => {
    calculator = initializeCalculator();
  });

  test("should return an empty result", () => {
    expect(getDisplayValue(calculator)).toBe("");
  });

  test("should clear display value and reset calculator", () => {
    addInputToDisplay(calculator, "123");
    resetCalculatorDisplay(calculator);
    expect(getDisplayValue(calculator)).toBe("");
  });

  test("should add input to display ", () => {
    addInputToDisplay(calculator, "2");
    addInputToDisplay(calculator, "+");
    addInputToDisplay(calculator, "3");
    expect(getDisplayValue(calculator)).toBe("2+3");
  });

  test("should multiply values and return result correctly", () => {
    addInputToDisplay(calculator, "2");
    addInputToDisplay(calculator, "*");
    addInputToDisplay(calculator, "3");
    computeResultFromDisplay(calculator);
    expect(getDisplayValue(calculator)).toBe("6");
  });

  test("should sum values and return the result correctly", () => {
    addInputToDisplay(calculator, "2");
    addInputToDisplay(calculator, "+");
    addInputToDisplay(calculator, "3");
    computeResultFromDisplay(calculator);
    expect(getDisplayValue(calculator)).toBe("5");
  });

  test("should subtract values and return the result correctly", () => {
    addInputToDisplay(calculator, "2");
    addInputToDisplay(calculator, "-");
    addInputToDisplay(calculator, "3");
    computeResultFromDisplay(calculator);
    expect(getDisplayValue(calculator)).toBe("-1");
  });

  test("should divide values and return the result correctly", () => {
    addInputToDisplay(calculator, "2");
    addInputToDisplay(calculator, "/");
    addInputToDisplay(calculator, "2");
    computeResultFromDisplay(calculator);
    expect(getDisplayValue(calculator)).toBe("1");
  });

  test("should divide values and return the result with decimals", () => {
    addInputToDisplay(calculator, "2");
    addInputToDisplay(calculator, "/");
    addInputToDisplay(calculator, "3");
    computeResultFromDisplay(calculator);
    expect(getDisplayValue(calculator)).toBe("0.6666666666666666");
  });

  test("should handle invalid input", () => {
    addInputToDisplay(calculator, "2+");
    computeResultFromDisplay(calculator);
    expect(getDisplayValue(calculator)).toBe("Error");
  });
});
