define(function(require){
    
    var animalRequirements = require('../data/animal-requirements.js');
    var pubSub = require('../common/pubSub.js');
    var processor = require('../common/processor.js');
    
    return {
        createVM: createVM,
        createAndBindVM: createAndBindVM
    }
    
    function createAndBindVM(ele){
        var vm = createVM();
        kendo.bind($(ele), vm);
    }
    
    //Make history tab pills
    
    function createVM(){
        var vm = {
            foodList: [],
            nutrientResults: []
        };
        
        
        
        vm.activate = function(){
            pubSub.subscribe("provideFoodList",function(msg, data){
                vm.set('foodList', data);
                var results = processor.getResultsFromFoodList(data);
                vm.set('nutrientResults', results);
                
            });
            $(".backToFoodList").on('click', function(e){
                $("#Results").fadeOut();
                $("#FoodSelection").fadeIn();
            });
        }
        
        vm = kendo.observable(vm);
        vm.activate();
        return vm;
    }
    
});