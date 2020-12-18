const searchPage = require('../pageObjects/searchPage');

describe('search Feature', () => {
    beforeEach(()=>{
        searchPage.open();
    })
    it('Validate url change when user change the speciality', () => {
        searchPage.searchPhysical()
        expect(browser).toHaveUrl("https://develop.terapeutica.digital/#/search?sp=phisical");
        searchPage.searchLanguage()
        expect(browser).toHaveUrl("https://develop.terapeutica.digital/#/search?sp=language");
        searchPage.searchOccupational()
        expect(browser).toHaveUrl("https://develop.terapeutica.digital/#/search?sp=ocupational");
    });
    it('Search a person called Maria ', () => {
        const value = 'Maria'
        searchPage.searchValue('Maria');
        const text = searchPage.resultText.getAttribute('Maria');
        expect(searchPage.resultText).toHaveTextContaining(value);         
    });

    it('validate map disappears from page when user click on List button ', () => {
        searchPage.searchMap
        expect(browser.elementMap).not.toBeDisplayed();         
    });
    
});

    

    
  



