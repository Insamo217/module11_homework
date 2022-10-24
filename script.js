// Напишите функцию getMonth(n), которая принимает номер месяца
// и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.

export function getMonth(n) {
  if (typeof n === "number") {
    if (n == 1) {
      return "Январь";
    } else if (n == 2) {
      return "Февраль";
    } else if (n == 3) {
      return "Март";
    } else if (n == 4) {
      return "Апрель";
    } else if (n == 5) {
      return "Май";
    } else if (n == 6) {
      return "Июнь";
    } else if (n == 7) {
      return "Июль";
    } else if (n == 8) {
      return "Август";
    } else if (n == 9) {
      return "Сентябрь";
    } else if (n == 10) {
      return "Октябрь";
    } else if (n == 11) {
      return "Ноябрь";
    } else if (n == 12) {
      return "Декабрь";
    } else {
      return "Число не в диапазоне от 1 до 12";
    }
  } else {
    return "Вводимое значение не является числом";
  }
}
