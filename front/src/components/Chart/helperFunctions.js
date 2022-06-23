

// returns an array of objects:
export function getDataByWeekNumber(weekNumber, data) {

    let result = data.filter((elem)=> {

        return elem.weekNumber == weekNumber
        
    });

    console.log('result: >>>>', result);

    return result;


}



