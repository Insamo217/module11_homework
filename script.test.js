import { getMonth } from "./script";

describe("tests for getMonth", () => {
  it("if n = 1 return 'Январь'", () => {
    expect(getMonth(1)).toBe("Январь");
  });
  it("if typeof n!== 'number' return 'Вводимое значение не является числом'", () => {
    expect(getMonth("test")).toBe("Вводимое значение не является числом");
  });
  it("if (n >= 1 && n <= 12) return 'Число не в диапазоне от 1 до 12'", () => {
    expect(getMonth(100)).toBe("Число не в диапазоне от 1 до 12");
  });
});
