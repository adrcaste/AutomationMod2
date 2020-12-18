const homePage = require('../pageObjects/homePage');
const searchPage = require('../pageObjects/searchPage');

describe('search Feature', () => {
    beforeEach(()=>{
        homePage.open();
    })
    it('search without any text', () => {
        homePage.search;
        expect(browser).toHaveUrl("https://develop.terapeutica.digital/#/");
        wait: 3000
      
    });

    it('get placeholder value and active focus', () => {
        
        const valueText = '¿Buscas a alguien o algo en específico?'
        homePage.SearchText()
        const text = homePage.inputSearch.getAttribute('placeholder');
        expect(text).toEqual(valueText)
        expect(homePage.inputSearch).toBeFocused();
        
    });

    it('search valid text ', () => {
        const valueSearch = 'Maria'
        homePage.search('maria');
        expect(browser).toHaveUrl("https://develop.terapeutica.digital/#/search?sp=all&q=maria");
        expect(searchPage.resultText).toHaveTextContaining(valueSearch);
      
    });
    
});

    

    
  



