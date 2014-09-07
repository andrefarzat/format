(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([root], factory);
    } else {
        // Browser globals
        root.format = factory(root);
    }

}(this, function (window) {

    var regexp = /\{([\w\:]+|)\}/g,
        regexpObj = /\{([\w\:\.]+|)\}/g;

    /**
     * @param  {*} value
     * @return {Boolean}
     */
    function isUndefined(value){
        return typeof value === 'undefined';
    }

    /**
     * @private
     * Format the string given the string and the args as array
     * @param  {String} str
     * @param  {Array} args
     * @return {String}
     */
    function formatNormalArguments(str, args){

        return str.replace(regexp, function(a,b){
            return isUndefined(args[b])? a : args[b];
        });

    }

    /**
     * @private
     * Format the given string using the object
     * @param  {String} str
     * @param  {Object} obj
     * @return {String}
     */
    function formatUsingObject(str, obj){

        return str.replace(regexpObj, function(a,b){
            b = b.split('.');
            var value = obj[b.shift()];

            while ( b.length ) {
                if( isUndefined(value) ){
                    break;
                }
                value = value[b.shift()];
            }

            return isUndefined(value) ? a : value;
        });

    }

    return function format(str, obj){

        return obj && obj.constructor === Object ?
            formatUsingObject(str, obj) :
            formatNormalArguments(str, [].slice.call(arguments, 1));

    };

}));
