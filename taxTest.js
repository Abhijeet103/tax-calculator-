// taxCalculator.test.js

// Import the function to test
const { getTaxAmmount } = require('./taxCalculator'); // Assuming your original file is named taxCalculator.js

// Import the testing framework
const { describe, it, expect } = require('@jest/globals'); // Assuming you're using Jest for testing

describe('getTaxAmmount function', () => {
    it('should calculate tax correctly when total income is less than 800000 for under 40 age group', () => {
        const result = getTaxAmmount(700000, 10000, 20000, 'under40');
        expect(result).toEqual(770000);
    });

    it('should calculate tax correctly when total income is more than 800000 for under 40 age group', () => {
        const result = getTaxAmmount(900000, 10000, 20000, 'under40');
        expect(result).toEqual(710000);
    });

    it('should calculate tax correctly when total income is less than 800000 for 40 to 60 age group', () => {
        const result = getTaxAmmount(700000, 10000, 20000, '40to60');
        expect(result).toEqual(770000);
    });

    it('should calculate tax correctly when total income is more than 800000 for 40 to 60 age group', () => {
        const result = getTaxAmmount(900000, 10000, 20000, '40to60');
        expect(result).toEqual(710000);
    });

    it('should calculate tax correctly when total income is less than 800000 for above 60 age group', () => {
        const result = getTaxAmmount(700000, 10000, 20000, 'above60');
        expect(result).toEqual(770000);
    });

    it('should calculate tax correctly when total income is more than 800000 for above 60 age group', () => {
        const result = getTaxAmmount(900000, 10000, 20000, 'above60');
        expect(result).toEqual(810000);
    });

    it('should return 0 when age group is not recognized', () => {
        const result = getTaxAmmount(700000, 10000, 20000, 'unknown');
        expect(result).toEqual(0);
    });

    it('should handle negative deductions correctly', () => {
        const result = getTaxAmmount(700000, 10000, -20000, 'under40');
        expect(result).toEqual(710000);
    });

    it('should handle zero gross income correctly', () => {
        const result = getTaxAmmount(0, 10000, 20000, 'under40');
        expect(result).toEqual(0);
    });

    it('should handle zero extra income correctly', () => {
        const result = getTaxAmmount(700000, 0, 20000, 'under40');
        expect(result).toEqual(780000);
    });

    it('should handle zero deductions correctly', () => {
        const result = getTaxAmmount(700000, 10000, 0, 'under40');
        expect(result).toEqual(790000);
    });
});
