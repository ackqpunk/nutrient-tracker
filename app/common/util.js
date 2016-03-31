define(function(require){
    
    return {
        loadPartial: loadPartial
    }
    
    function loadPartial(ele, url){
        $(ele).load(url);
    }
    
})