
var should      = require('should'),

	helpers		= require('../lib/helpers');

describe('helers', function () {
	it('should return an object', function () {
		should.exist(helpers);
		helpers.should.be.a('object');
	});

	describe('#defaults', function () {
		it('should have a "defaults" property', function () {
			should.exist(helpers.defaults);
			helpers.defaults.should.be.a('object');
		});

		it('should default "debug" to false', function () {
			var debug = helpers.defaults.debug;

			should.exist(debug);
			debug.should.equal(false);
		});

		it('should default "express3" to false', function () {
			var express3 = helpers.defaults.express3;

			should.exist(express3);
			express3.should.equal(false);
		});

		it('should default "minify" to false', function () {
			var minify = helpers.defaults.minify;

			should.exist(minify);
			minify.should.equal(false);
		});
	});

	describe('#settings', function () {
		var settings = {};

		it('should have a "settings" function', function () {
			should.exist(helpers.settings);
		});

		it('should not override values not passed in', function () {
			settings = helpers.settings({ foo: true, bar: false });

			for (var key in helpers.defaults) {
				settings[key].should.equal(helpers.defaults[key]); 
			}
		})

		describe('should override specified value(s)', function () {
			it('for "debug"', function () {
				settings = helpers.settings({ debug: true });
				settings.debug.should.equal(true);
			});

			it('for "express3"', function () {
				settings = helpers.settings({ express3: true });
				settings.express3.should.equal(true);
			});

			it('for "minify"', function () {
				settings = helpers.settings({ minify: true });
				settings.minify.should.equal(true);
			});
		});
	});
});