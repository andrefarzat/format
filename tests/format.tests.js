descibre("Main tests", function(){
   
    it('Simple test', function(){

        var expected = 'Something cool, really cool',
            tmpl = 'Something {0}, {1} {0}',
            result = format(tmpl, 'cool', 'really');


        expect(result).toBe(expected);
    });

});