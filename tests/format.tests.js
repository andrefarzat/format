describe("Main tests", function(){
   
    it('Simple test', function(){

        var expected = 'Something cool, really cool',
            tmpl = 'Something {0}, {1} {0}',
            result = format(tmpl, 'cool', 'really');


        expect(result).toBe(expected);
    });

    it('should return the original text', function(){
        var tmpl = 'Nothing {1} do nowhere {1} go',
            result = format(tmpl, 'to');

        expect(result).toBe(tmpl);
    });


    describe('within objects', function(){

        it('should work with a dict-like object', function(){
            var tmpl = 'The time is {time} in here',
                result = format(tmpl, { 'time': '12:00' } );

            expect(result).toBe('The time is 12:00 in here');
        });

        it('should return the original text', function(){
            var tmpl = 'Nothing {no} do nowhere {no} go',
                result = format(tmpl, { 'something': 'to' } );

            expect(result).toBe(tmpl);
        });

        it('should get from a property from the given key', function(){
            var tmpl = 'My name is {name.lastName}, {name.firstName} {name.lastName}',
                obj = { 'name': { 'firstName': 'James', 'lastName': 'Bond' } },
                result = format(tmpl, obj);

            expect(result).toBe('My name is Bond, James Bond');
        });

        it('should get from a property doesnt matter the depth', function(){
            var tmpl = '{doc.words.first}? Where we are {doc.words.second}, we dont need {doc.words.first}',
                obj = { 'doc': { 'words': { 'first': 'roads', 'second': 'going' } } },
                result = format(tmpl, obj);

            expect(result).toBe('roads? Where we are going, we dont need roads');
        });

    });

});