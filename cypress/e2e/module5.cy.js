describe('Module 5', () => {
    it('Should take a screenshot of a trainer', () => {
        cy.visit('https://fabrykatestow.pl')
        cy.get('h2').contains('Dostępne szkolenia').scrollIntoView()
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').eq(0).click()
        cy.get('h1')
            .contains('Kto nauczy CIę testów automatycznych?')
            .scrollIntoView()
            .then(() => {
                cy.screenshot({ capture: 'viewport' });
            });

    })
})