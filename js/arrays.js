export function generateSortedRandomArray(
  length = 10,
  min = 1,
  max = 100,
  unique = true,
) {
  if (length <= 0) {
    throw new Error("Длина массива должна быть положительным числом");
  }

  if (min > max) {
    throw new Error("Минимальное значение не может быть больше максимального");
  }

  if (unique && length > max - min + 1) {
    throw new Error(
      `Невозможно сгенерировать ${length} уникальных чисел в диапазоне [${min}, ${max}]. ` +
        `Максимальное возможное количество: ${max - min + 1}`,
    );
  }

  const arr = [];
  const usedNumbers = new Set();

  while (arr.length < length) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (unique) {
      if (!usedNumbers.has(randomNum)) {
        usedNumbers.add(randomNum);
        arr.push(randomNum);
      }
    } else {
      arr.push(randomNum);
    }
  }

  return arr.sort((a, b) => a - b);
}
