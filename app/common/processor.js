define(function(require){
    var nutrients = require('../data/nutrients.js');
    var animalRequirements = require('../data/animal-requirements.js');
    
    
    return {
        getResultsFromFoodList: getResultsFromFoodList
    }
    
    function getResultsFromFoodList(foodList){
        var results = [];
        
        var requirements = [{"0": 0},
                        {"203": 50},
                        {"204": 22.5},
                        {"301": 0.72},
                        {"303": 20},
                        {"304": 100},
                        {"305": 0.64},
                        {"306": 1.3},
                        {"307": 170},
                        {"309": 18.5},
                        {"312": 1.2},
                        {"315": 1.2},
                        {"317": 75},
                        {"318": 1.28},
                        {"320": 250},
                        {"326": 1.75},
                        {"404": 0.1},
                        {"405": 1},
                        {"406": 10},
                        {"421": 637},
                        {"430": 0.25},
                        {"431": 188},
                        {"501": 1.3},
                        {"502": 1.4},
                        {"503": 1.08},
                        {"504": 2.55},
                        {"506": 0.43},
                        {"508": 1},
                        {"510": 0.33},
                        {"511": 1.93},
                        {"512": 0.65},
                        {"573": 10},
                        {"629": 0.025}];
        
        _.each(nutrients.nutrientList, function(x){
            var nutrient_id = parseInt(x.nutrient_id);
            var list = _.flatten(_.pluck(foodList, 'nutrients'))
            var nut = _.filter(list, function(y){ return y.nutrient_id == nutrient_id})
            var sum = _.sum(_.map(nut, function(x){ return x.values.calculatedValue }))
            
            var required = _.filter(_.pluck(requirements, nutrient_id.toString()), function(x){ return x !== undefined });
            var obj = {
                ahod_name: x.ahod_name,
                nutrient_id: nutrient_id,
                uom: x.unit,
                sum: Math.round(sum * 100) / 100,
                required: required[0]
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