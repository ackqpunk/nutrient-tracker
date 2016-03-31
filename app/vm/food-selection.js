define(function(require){
    var dataservice = require('app/dataservice.js');
    var animalRequirements = require('../data/animal-requirements.js');
    var nutrients = require('../data/nutrients.js');
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
        vm.currentFoodDetail = {};
        vm.hasSelectedItems = function(){
            return vm.get('selectedItems').length > 0;
        }
        vm.viewResults = viewResults;
        vm.removeSelectedItem = removeSelectedItem;
        
        
        vm.activate();
        vm = kendo.observable(vm)
        
        vm.bind('change', function(e){
            if(e.field === 'selectedItem'){
                refreshSelectedItemsTemplate();
            }
        });
        
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
            
                    
                    dataservice.foodReport(ndbno).done(function(data){
                        vm.set('currentReport', data);
                        getFoodDetail(vm, data);
                        var template = kendo.template($("#uom-template").html());
                        var uomData = vm.get('currentFoodDetail');
                        var templateHtml = template(uomData);
                        
                        if($("#SelectUOM").length > 0)
                            $("#SelectUOM").remove();
                        
                        var div = "<div id='SelectUOM' style='display: none;'></div>"
                        $(e.currentTarget).parent().parent().after(div)
                        $("#SelectUOM").html(templateHtml);
                        $("#SelectUOM").slideToggle();
                        $("#BtnAddToList").on('click', function(){
                            var uom = $("#UOM").val();
                            var qty = $("#Qty").val();
                            var name = $("#Name").val();
                            var ndbno = $("#Ndbno").val();
                            addToSelectedList(uom, qty, name, ndbno);
                            
                        })
                    })
        }
        
        vm = kendo.observable(vm);
        return vm;
        
        function viewResults(){
            var data = vm.get('selectedItems');
            pubSub.publish("provideFoodList", data.toJSON());
            $("#FoodSelection").hide();
            $("#Results").show();
        }
        
        function removeSelectedItem(e){
            var ndbno = $(e.currentTarget).data("ndbno");
            var newList = _.filter(vm.selectedItems, function(x){ return x.ndbno !== ndbno });
            vm.set('selectedItems', newList);
            vm.trigger('change', {field: 'selectedItems'});
        }
        
        function getFoodDetail(vm, data){
            var measures = _.pluck(data.report.food.nutrients[0].measures, 'label');
            var nutrientIds = _.filter(_.pluck(nutrients.nutrientList, 'nutrient_id'), function(x){ return x != 0});
            var listOfNutrients = _.filter(data.report.food.nutrients, function(x){ return _.contains(nutrientIds, parseInt(x.nutrient_id))});
            var ndbno = data.report.food.ndbno;
            var name = data.report.food.name;
            
            var foodDetail = {
                measures: measures,
                ndbno: ndbno,
                name: name,
                nutrients: listOfNutrients
            };
            
            vm.set('currentMeasures', measures);
            vm.set('currentFoodDetail', foodDetail);
        }
        
        function addToSelectedList(uom, qty, name, ndbno){
            var obj = {
                    uom: uom,
                    qty: qty,
                    name: name,
                    ndbno: parseInt(ndbno),
                    nutrients: getNutrients(uom, qty)
                };
                vm.selectedItems.push(obj);
                vm.trigger('change', {field: 'selectedItems'});
/*                var selectedTemplate = kendo.template($("#selected-item-template").html());
                var selectedHtml = selectedTemplate(vm.selectedItems);
                $("#SelectedItems").html(selectedHtml);*/
                $(".removeSelectedItem").on('click', vm.removeSelectedItem)
                $("#SelectUOM").slideToggle();
        }
        function getNutrients(uom, qty){
            var list = [];
            var foodDetail = vm.get('currentFoodDetail');
            $.each(foodDetail.nutrients, function(i,v){
                var selectedUOM = _.find(v.measures, function(x){
                    return x.label = uom
                });
                
                var nutrient = {
                    nutrient_id: parseInt(v.nutrient_id),
                    name: v.name,
                    unit: v.unit,
                    values: {
                        uom: selectedUOM.label,
                        valuePerUnit: parseFloat(selectedUOM.value),
                        calculatedValue: parseFloat(selectedUOM.value) * qty
                    }
                }
                list.push(nutrient);
            });
            return list;
        }
        
    }
    
})