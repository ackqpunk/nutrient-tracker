_.sum = function(obj) { if (!$.isArray(obj) || obj.length == 0) return 0; return _.reduce(obj, function(sum, n) { return sum += n; }); }