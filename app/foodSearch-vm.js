define(function(require){
    var dataservice = require('app/dataservice.js');
    //var kendo = require('scripts/lib/kendo-ui/js/kendo.core.min.js');
    
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
        
        vm.filter = {
            search: "",
            fg: 0,
        }
        vm.items = [];
        vm.activate = function(){
            dataservice.getFoodGroups().done(function(data){
                vm.set('items', data.list.item);
                $('.getFoodsInGroup').on('click', function(e){
                    var fg = $(e.currentTarget).data('fg');
                    vm.getFoodsInGroup(fg)
                })
            });
        }
        
        vm.getFoodsInGroup = function(fg){
            
            dataservice.getFoodsInGroup(fg).done(function(data){
               vm.set('items', data.list.item);
            });
        }
        
        vm.activate();
        vm = kendo.observable(vm)
        
        return vm;
    }
})