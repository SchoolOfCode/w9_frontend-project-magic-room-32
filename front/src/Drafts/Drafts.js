/*  ALL THE CODE WITHIN THESE FILES WERE PIECES THAT WERE NEVER FINISHED AND DIDNT MAKE IT INTO THE FINAL PIECE. WE HAVE DECIDED TO KEEP THEM TO ONE SIDE SO THAT THEY CAN BE WORKED ON FURTHER DOWN THE LINE 
OR EVEN BY OTHER USERS WANTING TO CONTRIBUTE */

/*  THE CODE SNIPPET BELOW FIT ON LINE 22 IN App.js.
    THIS WAS A WORK IN PROGRESS LINKED WITH OUR HIGHLIGHTING FEATURE.
    WE WANTED TO MAKE IT EASIER TO SEE WHICH WEEK YOU WERE CURRENTLY VIEWING.


    event.target.style.background = 'linear-gradient(to bottom, rgb(206, 1, 233) 5%, #80006e 100%)';
    document.querySelector(".week").style.background =
    "linear-gradient(to bottom, rgb(206, 1, 233) 5%, #80006e 100%)" 
 
HIGHLIGHTING BUTTON:     

     useEffect(() => {
    async function displayDiary() {
      fetch(`http://localhost:3001/diary/${week}`)
        .then((response) => response.json())
        .then((data) => setDiaries(data))
        .catch((err) => {
          console.log("error: ", err);
        });
    }
    displayDiary();
  }, []);  */


/*  THIS CODE SNIPPET BELOW WAS LOCATED IN helperFunctions.js ON LINE 30.
    ALSO LINKED WITH THE HIGHLIGHT FEATURE.

    let buttonToHighlight = document.querySelector(`#`+num);
    buttonHighlight.style.background = 'linear-gradient(to bottom, rgb(206, 1, 233) 5%, #80006e 100%)';

    let buttonsToReset = document.querySelector(`#${elem}}`);
    buttonsToReset.style.background ='linear-gradient(to bottom, #6d6d6d 5%, #535353 100%)'; */

