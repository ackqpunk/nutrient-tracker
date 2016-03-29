define(function(require){
    
    var animalRequirements = require('./data/animal-requirements.js');
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
            foodList: []
        };
        
        
        vm.activate = function(){
            pubSub.subscribe("provideFoodList",function(data){
                vm.set('foodList', data);
                var results = processor.getResultsFromFoodList(data);
            });
        }
        
        vm = kendo.observable(vm);
        return vm;
    }
    
});