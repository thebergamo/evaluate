var expect = require('chai').expect;

var evaluate = require('../index');

describe('Evaluate', function(){
	describe('should throw an error', function(){
		it('when no arguments is specified', function(){
			expect(function() {
				evaluate()
			}).to.throw(TypeError, 'You must specified an variable and type to evaluate');
		});

		it('when type is not specified', function(){
			expect(function() {
				evaluate('')
			}).to.throw(TypeError, 'You must send the \'type\' of variable is evalated.');
		});

		it('when a specified type is not supported', function(){
			expect(function() { 
				evaluate('', 'test')
			}).to.throw(TypeError, 'Specified type test is invalid. See the supported types');
		});

		it('when a variable have a type different instead the specified', function(){
			expect(function() {
				evaluate('', 'number');
			}).to.throw(TypeError, 'Your variable is already setted and isn\'t a Number');
		});
	});

	describe('should get the default value', function(){
		it('when a type number is specified', function(){
			var vari;
			var ret = evaluate(vari, 'number');

			expect(ret).to.be.a.number;
			expect(ret).to.be.eql(0);
		});

		it('when a type number and default value is specified', function(){
			var vari;
			var ret = evaluate(vari, 'number', 10);

			expect(ret).to.be.a.number;
			expect(ret).to.be.eql(10);
		});

		it('when a type string is specified', function(){
			var vari;
			var ret = evaluate(vari, 'string');

			expect(ret).to.be.a.string;
			expect(ret).to.be.eql('');
		});
		
		it('when a type string and default value is specified', function(){
			var vari;
			var ret = evaluate(vari, 'string', 'just test');

			expect(ret).to.be.a.string;
			expect(ret).to.be.eql('just test');
		});

		it('when a type boolean is specified', function(){
			var vari;
			var ret = evaluate(vari, 'boolean');

			expect(ret).to.be.a.boolean;
			expect(ret).to.be.eql(false);
		});

		it('when a type boolean and default value is specified', function(){
			var vari;
			var ret = evaluate(vari, 'boolean', true);

			expect(ret).to.be.a.boolean;
			expect(ret).to.be.eql(true);
		});
		
		it('when a type date is specified', function(){
			var vari;
			var ret = evaluate(vari, 'date');

			expect(ret).to.be.a.string;
			expect(ret).to.be.eql(new Date());
		});
		
		it('when a type date and default value is specified', function(){
			var vari;
      var nDate = new Date(1994, 05, 03)
			var ret = evaluate(vari, 'date', nDate);

			expect(ret).to.be.a.string;
			expect(ret).to.be.eql(nDate);
		});
		
		it('when a type object is specified', function(){
			var vari;
			var ret = evaluate(vari, 'object');

			expect(ret).to.be.an.object;
			expect(ret).to.be.eql({});
		});
		
		it('when a type object and default value is specified', function(){
			var vari;
			var ret = evaluate(vari, 'object', {just: 'test'});

			expect(ret).to.be.an.object;
			expect(ret).to.be.eql({just: 'test'});
		});
		
		it('when a type array is specified', function(){
			var vari;
			var ret = evaluate(vari, 'array');

			expect(ret).to.be.an.array;
			expect(ret).to.be.eql([]);
		});
		
		it('when a type array and default value is specified', function(){
			var vari;
			var ret = evaluate(vari, 'array', [1, 2, 3]);

			expect(ret).to.be.an.array;
			expect(ret).to.be.eql([1, 2, 3]);
		});
	});

	describe('should get the current value in variable', function(){
		it('when a number variable is specified', function(){
			var vari = 10;
			var ret = evaluate(vari, 'number');

			expect(ret).to.be.a.number;
			expect(ret).to.be.eql(vari);
		
		});
	
		it('when a string variable is specified', function(){
			var vari = 'Tester';
			var ret = evaluate(vari, 'string');

			expect(ret).to.be.a.string;
			expect(ret).to.be.eql(vari);
		
		});
	
		it('when a boolean variable is specified', function(){
			var vari = true;
			var ret = evaluate(vari, 'boolean');

			expect(ret).to.be.a.boolean;
			expect(ret).to.be.eql(vari);
		
		});
	
		it('when a date variable is specified', function(){
			var vari = new Date(1994, 05, 03);
			var ret = evaluate(vari, 'date');

			expect(ret).to.be.a.date;
			expect(ret).to.be.eql(vari);
		
		});
	
		it('when a object variable is specified', function(){
			var vari = {hello: 'world'};
			var ret = evaluate(vari, 'object');

			expect(ret).to.be.an.object;
			expect(ret).to.be.eql(vari);
		
		});
	
		it('when a array variable is specified', function(){
			var vari = [0, 1, 2];
			var ret = evaluate(vari, 'array');

			expect(ret).to.be.an.array;
			expect(ret).to.be.eql(vari);
		
		});
	
	});

});
