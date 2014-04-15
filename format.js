(function (root, factory) {
    
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([root], factory);
    } else {
        // Browser globals
        root.format = factory(root);
    }

}(this, function (window) {

    return function format(){
        var args = [].slice.call(arguments, 1),
            str = arguments[0];

        return str.replace(/\{(\d+)\}/g, function(a,b){
            return typeof args[b] != 'undefined' ? args[b] : a;
        });

    };

}));