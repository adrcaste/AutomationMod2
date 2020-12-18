const pageUrls = require ('./pageUrls');

class searchPage extends pageUrls{
    get resultText (){return $('div[class=strip_list] h3')}
    get btnPhysical (){return $('=FÍSICA')}
    get btnLanguage (){return $('=LENGUAJE')}
    get btnOccupational(){return $('=OCUPACIONAL')}
    get searchBarList(){return $('input[type=text]')}
    get btnSearch(){return $('input[type=submit]')}
    get btnList(){return $('.icon-th-list')}
    get elementMap(){return $('div#map')}
    get btnCheckProfile(){return $('a[class=btn_listing]')}

    
    open () {
        return super.open('#/search');
    }

   searchPhysical (){
    this.btnPhysical.click();
    }
    
   searchLanguage (){
    this.btnLanguage.click();
        }
    
    searchOccupational (){
     this.btnOccupational.click();
        }

    searchValue (data){
     this.searchBarList.setValue(data);
     this.btnSearch.click();
     
            }
    searchMap (){
    this.btnList.click();
     }
    
}
module.exports = new searchPage();