import { fonction } from './script.js';

describe('fonction', function() {

    it('should return Test Jasmine (string) if f == 1', function() {
        expect(fonction("1")).toBe('Test Jasmine');
    });

});