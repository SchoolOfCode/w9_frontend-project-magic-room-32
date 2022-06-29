const { wait } = require("@testing-library/user-event/dist/utils");

console.clear();




describe('home page tests', () => {




  it('check if button 1 exists:', () => {

    cy.visit('http://localhost:3000/');
    cy.get('#EachWeek > #1 ').should('exist');
  });





  it('press button 3 and check header 1', ()=> {
    cy.visit('http://localhost:3000/');
    cy.get('#EachWeek > #3').click();
    cy.get('#chart > h1').contains('Quiz results for Week 3');
    
      
  });



  it('click 7, click 15, check header 1 content', ()=> {

        cy.visit('http://localhost:3000/');
        cy.get('#EachWeek > #7').click();
        cy.get('#chart > h1').contains('Quiz results for Week 7');
        
        
        cy.get('#EachWeek > #15').click();
        cy.get('#chart > h1').contains('Quiz results for Week 15');

});



// ✅ fill in diary
        it('fill in diary and press submit', ()=> {
                cy.visit('http://localhost:3000/');
                cy.get('#input-diary').type('hello');

                cy.get('form > button').should('exist');
                cy.get('form > button').click();
                wait(3000);

        });



// ✅ radio check wednesday
        it('radio:> check wednesday, ',()=> {
                cy.visit('http://localhost:3000/');
                cy.get('#EachWeek > #13').click();

                cy.get('#quizzNumberSelect > #3 ').click();

                cy.wait(3000)

                
        });




        // 🏀  sliding slider:
        it('slide slider', ()=> {

                cy.viewport(700, 900)

                cy.visit('http://localhost:3000/');         
                cy.get('#EachWeek > #1').click();


                // cy.get('#slider').should('exist');
                
                cy.wait(3000);
                cy.get('#slider').invoke('val', 8).trigger('change').click({force: true});
                cy.wait(3000);
                cy.get('#quizzNumberSelect > #3 ').click();
                cy.wait(3000);
                cy.get('#input-diary').type('hello');




                cy.get('#quizzInput > :nth-child(3)').contains('10');

                



                

        });




        


















})  // end of describe



