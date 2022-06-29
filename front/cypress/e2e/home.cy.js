
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




  it('click 1, click 2 and check header 1 content', ()=> {

        
        cy.visit('http://localhost:3000/');
        
        cy.get('#EachWeek > #3').should('exist');

        
        
       
        
  
  }); 






//   it('press button 4', ()=> {
//         cy.visit(homePage);
//         cy.get('#EachWeek > #4').click();
//         cy.get('#chart > h1').contains('Quiz results for Week 4 ');

//   });













})  // end of describe