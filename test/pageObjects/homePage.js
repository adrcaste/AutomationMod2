const pageUrls = require ('./pageUrls');

class homePage extends pageUrls{
    get inputSearch (){return $('#search-input')}
    get btnSearch (){return $('[value=Buscar]')}
    get btnphisical (){return $('label[for="phisical"]')}
    


search (data){
    this.inputSearch.setValue(data);
    this.btnSearch.click();
    }
    open () {
        return super.open('');
    }
SearchText (){
    this.btnphisical.click();
    
}

    
}
module.exports = new homePage();