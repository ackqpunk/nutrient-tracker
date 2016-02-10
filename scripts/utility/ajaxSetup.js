$(function(){
    $.ajaxSetup({
        key: "api_key=wPbL7JubZTKoMGdd9u2WudJACtmH1eTzlJ41hFI8",
        format: "json"
    }); 
});

$.ajaxPrefilter(function (options, originalOptions, jqXHR){ 
  var newObject = {
     api_key : 'wPbL7JubZTKoMGdd9u2WudJACtmH1eTzlJ41hFI8',
     format: 'json'
  }

  options.data = $.param($.extend(originalOptions.data, newObject));
});