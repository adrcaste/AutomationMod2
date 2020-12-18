const searchPage = require('../pageObjects/searchPage');

describe('WebService Feature', () => {
    beforeEach(()=>{
        searchPage.open();
    })

        it('Success response Webservices ', () => {
            
            browser.setupInterceptor();
            searchPage.btnCheckProfile.click(); 
            browser.pause(5000);
            browser.expectRequest('GET', 'https://javito-stage.herokuapp.com/v1/specialist/1cd5bf4a-9166-429b-b993-cc1a47746c8e', 200);

         });
  
});

    

    
  



