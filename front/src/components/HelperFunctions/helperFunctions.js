export function getDataByWeekNumber(weekNumber, data) {
  let result = data.filter((elem) => {
    return elem.weekNumber === weekNumber;
  });

  let resultCorrectOnes = result.map((elem) => {
    return elem.correct;
  });

  return resultCorrectOnes;
}

export function percentageCalc(arr) {
  let total = 0;

  arr.map((elem) => {
    return total = total + elem;
  });
  let percentage = (total * 100) / 50;
  return percentage;
}

// highlights button clicked on
export function buttonHighlight(num) {
  let allButtonIds = [];

  for (let i = 1; i <= 16; i++) {
    allButtonIds.push(i);
  }

}
