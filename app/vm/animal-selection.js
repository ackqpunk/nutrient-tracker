define(function(require){
    var animalRequirements = require('../data/animal-requirements.js');
    var pubSub = require('../common/pubSub.js');
    
    
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
        var vm = {};
        
        vm.animal = {};
        vm.setAnimal = function(e){
            var animal = $(e.currentTarget).val();
            if(animal){
                switch(animal){
                    case "Dog":
                        var dog = {
                            animal: "Dog",
                            requirements: animalRequirements.Dog
                        }
                }
            }
        }
        
        vm.activate = function() {
            pubSub.subscribe("requestAnimal", function(){
                pubSub.publish("provideAnimal", vm.animal);
            }); 
        }
        
        vm = kendo.observable(vm);
        return vm;
    }
    
})