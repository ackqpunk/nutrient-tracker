define(function(require){
    var nutrients = require('../data/nutrients.js')
    
    
    return {
        getResultsFromFoodList: getResultsFromFoodList
    }
    
    function getResultsFromFoodList(foodList){
        var results = [];
        
        _.each(nutrients.nutrientList, function(x){
            var nutrient_id = parseInt(x.nutrient_id);
            var list = _.flatten(_.pluck(foodList, 'nutrients'))
            var nut = _.filter(list, function(y){ return y.nutrient_id == nutrient_id})
            var obj = {
                ahod_name: x.ahod_name,
                nutrient_id: nutrient_id,
                uom: x.unit,
                sum: _.sum(_.map(nut, function(x){ return x.values.calculatedValue })),
                required: 0
            };
            results.push(obj);
        })
        
        return results;
        
    }
})

//qty
//

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