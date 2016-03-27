define(function(require){
    var dataservice = require('app/dataservice.js');
    var animalRequirements = require('../data/animal-requirements.js');
    
    
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
        vm.currentReport = {};
        
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
                $('.getMeasureAndValue').on('click', getMeasureAndValue);
            });
        }
        function getMeasureAndValue(e){
            var ndbno = $(e.currentTarget).data("ndbno");
                    var div = "<div id='SelectUOM' style='display: none;'></div>"
                    $(e.currentTarget).parent().parent().after(div)
                    dataservice.foodReport(ndbno).done(function(data){
                        vm.set('currentReport', data);
                        var measures = _.pluck(data.report.food.nutrients[0].measures, 'label');
                        var ndbno = data.report.food.ndbno;
                        var name = data.report.food.name;
                        vm.set('currentMeasures', measures);
                        var template = kendo.template($("#uom-template").html());
                        var uomData = {
                            measures: measures,
                            ndbno: ndbno,
                            name: name
                        };
                        var templateHtml = template(uomData);
                        $("#SelectUOM").html(templateHtml);
                        $("#SelectUOM").slideToggle();
                        $("#BtnAddToList").on('click', function(){
                            var uom = $("#UOM").val();
                            var qty = $("#Qty").val();
                            var name = $("#Name").val();
                            var ndbno = $("#Ndbno").val();
                            var obj = {
                                uom: uom,
                                qty: qty,
                                name: name,
                                ndbno: ndbno
                            };
                            vm.selectedItems.push(obj);
                            vm.trigger('change', {field: 'selectedItems'});
                            var selectedTemplate = kendo.template($("#selected-item-template").html());
                            var selectedHtml = selectedTemplate(vm.selectedItems);
                            $("#SelectedItems").html(selectedHtml);
                        })
                    })
        }
        
        vm = kendo.observable(vm);
        return vm;
    }
    
})