define(function(require){
    
    return {
        getFoodGroups: getFoodGroups,
        getFoodsInGroup: getFoodsInGroup,
        getNutrientInfo: getNutrientInfo,
        search: search,
        foodReport: foodReport
    }
   
    function getFoodGroups(){
        return $.getJSON("http://api.nal.usda.gov/ndb/list", {lt: 'g', sort: 'n'})
    }
    function getFoodsInGroup(fg){
        return $.getJSON("http://api.nal.usda.gov/ndb/search", {fg: fg});
    }
    function getNutrientInfo(){
        return $.getJSON("http://api.nal.usda.gov/ndb/nutrients/");
    }
    function search(search, type){
        return $.getJSON("http://api.nal.usda.gov/ndb/search", {q: search});
    }
    function foodReport(ndbno){
        return $.getJSON("http://api.nal.usda.gov/ndb/reports", {type: 'b', ndbno: ndbno});
    }
});