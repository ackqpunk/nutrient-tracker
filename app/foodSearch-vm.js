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
        vm.itemsInFg = [];
        vm.itemsInFgSearch = [];
        vm.activate = function(){
            dataservice.getFoodGroups().done(function(data){
                vm.set('items', data.list.item);
                $('.getFoodsInGroup').on('click', function(e){
                    var fg = $(e.currentTarget).data('fg');
                    var fgName = $(e.currentTarget).data('fg-name');
                    vm.set("fgSelected", true);
                    vm.set("selectedFg", {fg: fg, fgName: fgName});
                    vm.getFoodsInGroup(fg);
                })
            });
        }
        vm.selectedFg = {};
        vm.fgSelected = false;
        vm.goBackToFg = goBackToFg;
        vm.getFoodsInGroup = getFoodsInGroup;
        vm.filterFoodList = filterFoodList;
        vm.search  = "";
        vm.selectedItems = [];
        
        vm.activate();
        vm = kendo.observable(vm)
        
        
        function goBackToFg(){
            vm.set("fgSelected",false);
            vm.set("selectedFg", {});
        }
        function filterFoodList(e){
            vm.set('search', $(e.currentTarget).val());
             if(vm.search.length === 0){
                vm.set('itemsInFgSearch', vm.itemsInFg);
            } else {
                vm.set('itemsInFgSearch', _.filter(vm.itemsInFg, function(value){
                    return value.name.indexOf(vm.search) !== -1;
                }) );
            }
        }
        function getFoodsInGroup(fg){
            dataservice.getFoodsInGroup(fg).done(function(data){
               vm.set('itemsInFg', data.list.item);
               vm.set('itemsInFgSearch', data.list.item );
                $('.addToList').on('click', function(e){
                    var ndbno = $(e.currentTarget).data("ndbno");
                    var item = _.find(vm.itemsInFgSearch, function(x){
                        return x.ndbno === ndbno;
                    });
                    if(item){
                        var selections = vm.get('selectedItems');
                        selections.push(item);
                        vm.set('selectedItems', selections);
                    }
                });
            });
        }
        
        return vm;
    }
})