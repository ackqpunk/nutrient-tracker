define(function(require){
    var nutrients = require('../data/nutrients.js')
    
    
    return {
        getResultsFromFoodList: getResultsFromFoodList
    }
    
    function getResultsFromFoodList(foodList){
        $.each(nutrients.nutrientList, function(i,v){
            var nutrient_id = parseInt(v.nutrient_id);
            var foodNutrients = $()
            var obj = {
                ahod_name: v.ahod_name,
                nutrient_id: nutrient_id,
                uom: v.unit,
                
            }
        });
        
    }
})



/*name: "Alcoholic beverage, daiquiri, prepared-from-recipe"
ndbno: "14010"
nutrients: Array[15]
    0: Object
        name: "Protein"
        nutrient_id: "203"
        unit: "g"
        values: Object
            calculatedValue: 0.04
            uom: "fl oz"
            valuePerUnit: 0.02
            qty: "2"
            uom: "fl oz"*/