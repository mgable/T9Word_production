'use strict';

describe('T9Word ', function () {
	it('should be defined', function () {
		expect(T9WORD).toBeDefined();
	});

	describe ('input ', function(){
		it ('should throw error on empty entry', function(){
			expect(T9WORD.controller('')).toBe('Please enter some numbers');
		});

		it ('should throw error when non-numeric characters are in entry', function(){
			expect(T9WORD.controller('a12@')).toBe('Entry can only contain numbers');
		});

		it ('should throw error when only zeros and ones are entered', function(){
			expect(T9WORD.controller('0101010')).toBe('A combination of only zeros and ones produces no results');
		});

		it ('should correctly map digits to characters when there is a combination of zeros and ones and 2 - 9 characters', function(){
			expect(T9WORD.controller('01010102')).toEqual(['a','b','c']);
		});

		it ('should correctly map digits to characters using one digit', function(){
			expect(T9WORD.controller('2')).toEqual(['a','b','c']);
		});

		it ('should correctly map digits to characters using two digits', function(){
			expect(T9WORD.controller('23')).toEqual([ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]);
		});

		it ('should correctly map digits to characters using three digits', function(){
			expect(T9WORD.controller('876')).toEqual([ 'tpm', 'tpn', 'tpo', 'tqm', 'tqn', 'tqo', 'trm', 'trn', 'tro', 'tsm', 'tsn', 'tso', 'upm', 'upn', 'upo', 'uqm', 'uqn', 'uqo', 'urm', 'urn', 'uro', 'usm', 'usn', 'uso', 'vpm', 'vpn', 'vpo', 'vqm', 'vqn', 'vqo', 'vrm', 'vrn', 'vro', 'vsm', 'vsn', 'vso' ] );
		});
	});
});
