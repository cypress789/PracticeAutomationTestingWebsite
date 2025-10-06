/// <reference-types='cypress'/> 
describe('File Upload Tests', () => {
it('hover and click revealed option', () => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

  // Hover on the element
  cy.get('#mousehover').trigger('mouseover');

  // Click the revealed "Top" option
  cy.contains('Top').click({ force: true });

  // Assertion
  cy.url().should('include', 'top');
});

     it('Verify text inside iframe', () => {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Wait until iframe is loaded
    cy.frameLoaded('#courses-iframe')
    // Now access the iframe
    cy.iframe('#courses-iframe')
      .find('.image').eq(5)
      .click();
  });

//   beforeEach(() => {
//     cy.visit('https://testautomationpractice.blogspot.com/');
//   });
  it('Drag and Drop using plugin', () => {
 cy.get('#draggable').drag('#droppable', { force: true });
  cy.get('#droppable p').should('contain.text','Dropped!')

  })







it('Handles popup window', () => {
 

  cy.window().then((win)=>{
    cy.stub(win,'open').as('windowopen')
  })
  cy.get('#PopUp').click()
});
it('Handles new tab by removing target', () => {
 

  cy.contains('New Tab')
    .invoke('removeAttr', 'target')
    .click();

  

});


 it('Handles prompt alert', () => {
    const stub = cy.stub();
    // stub the prompt input
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('My input text');
    });

    cy.get('button#promptAlert').click();

    // After filling prompt, verify outcome
    cy.contains('You entered: My input text').should('be.visible');
  });

   it('Handles confirmation alert (OK and Cancel)', () => {
    // OK case
    cy.on('window:confirm',(text)=>{
        expect(text).to.contains('Press a button!')
        return true // press ok button 
    })
   cy.get('#confirmBtn').click();
  cy.on('window:confirm',(text)=>{
    expect(text).to.contains('Press a button!')
    return false
  })
})

  it('Handles simple alert (OK only)', () => {
    // Listen for window:alert
cy.on('window:alert',(text)=>{
    expect(text).to.contains('I am an alert box!')
})
    // Trigger the alert
   cy.get('#alertBtn').click();
  });


  it('Date picker', () => {
    
 cy.get('#datepicker')
    .type('02/05/2025'); // mm/dd/yyyy format
  cy.get('body').click(0, 0); // close the calendar popup

  cy.get('#txtDate').click(); // open the date picker

  // Select year
  cy.get('.ui-datepicker-year').select('2025'); // choose year 2025

  // Select month
  cy.get('.ui-datepicker-month').select('Feb'); // choose February

  // Select day
  cy.get('.ui-datepicker-calendar').contains('2').click(); // click day 2
  // Assertions
  cy.get('#datepicker').should('have.value', '02/05/2025');
  cy.get('#txtDate').should('have.value', '02/02/2025');


  cy.get('#start-date').click()
    

  });



  it('Uploads a single file', () => {
    const fileName = 'Rune _ Beta.pdf';  // assume in cypress/fixtures

   cy.get('#singleFileInput')// adjust selector
      .attachFile(fileName);

    // Submit if needed
    cy.get('#singleFileForm > button').click();

  });
  it('Uploads a multipe file', () => {
    const files = ['Rune _ Beta.pdf','download.png'];  // assume in cypress/fixtures

  cy.get('#multipleFilesInput')
      .attachFile(files);

    // Submit if needed
    cy.get('#multipleFilesForm > button').click();

  });
})