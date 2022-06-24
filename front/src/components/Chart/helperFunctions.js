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




export function percentageCalc(arr) {
  let total = 0;

  arr.map((elem)=> {
    total = total + elem;
  })

  let percentage = total*100/50;

  // console.log('percentage: >>>> ', percentage);

  return percentage;


}



// highlights button clicked on
export function buttonHighlight(num) {

  let allButtonIds =[];

  for(let i=1;i<=16;i++){
    allButtonIds.push(i) 
  }
  // console.log('allButton IDs: >>>>', allButtonIds);
  // console.log('User Selected Week:', num);


  // let buttonToHighlight = document.querySelector(`#`+num);
  // buttonHighlight.style.background = 'linear-gradient(to bottom, rgb(206, 1, 233) 5%, #80006e 100%)';

  
  // let buttonsToReset = document.querySelector(`#${elem}}`);
  // buttonsToReset.style.background ='linear-gradient(to bottom, #6d6d6d 5%, #535353 100%)';





}






