define(function(require){
    
    var animalRequirements = require('./data/animal-requirements.js');
    
    
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
        
        vm = kendo.observable(vm);
        return vm;
    }
    
})