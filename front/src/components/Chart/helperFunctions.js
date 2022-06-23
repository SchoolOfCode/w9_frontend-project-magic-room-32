// needs to return correct in list 🏀
// returns an array of objects:
export function getDataByWeekNumber(weekNumber, data) {
  let result = data.filter((elem) => {
    return elem.weekNumber == weekNumber;
  });

  let resultCorrectOnes = result.map((elem) => {
    return elem.correct;
  });

  return resultCorrectOnes;
}
