import {describe, expect, it} from "vitest";
import TsFifoArray from "../src/index.js"

describe('FifoArray', () => {

    it('should return an array with a fixed length', () => {
        const fifoArray = TsFifoArray(3, [ 'a', 'b', 'c', 'd' ]);
        expect(fifoArray).toEqual([ 'b', 'c', 'd' ]);
        expect(fifoArray.max).toEqual(3);
        expect(fifoArray.length).toEqual(3);
    });

    it('should push to the end and chop from the start', () => {
        const fifoArray = TsFifoArray(3);
        fifoArray.push(2, 3, 4);
        expect(fifoArray).toEqual([ 2, 3, 4 ]);

        fifoArray.push(5);
        expect(fifoArray).toEqual([ 3, 4, 5 ]);
    });

    it('should unshift to the start and chop from the end', () => {
        const fifoArray = TsFifoArray<number|string>(3, [ 0, 1, 2 ]);
        expect(fifoArray).toEqual([ 0, 1, 2 ]);

        fifoArray.unshift('a', 'b');
        expect(fifoArray).toEqual([ 'a', 'b', 0 ]);
    });

    it('should splice and chope from the end', () => {
        const fifoArray = TsFifoArray<number|string>(3, [ 0, 1, 2 ]);
        expect(fifoArray).toEqual([ 0, 1, 2 ]);

        fifoArray.splice(1, 2, 'a'); // at position 1, remove 2 elements and add 'a'
        expect(fifoArray).toEqual([ 0, 'a' ]);

        fifoArray.splice(1, 0, 'b'); // at posotion 1, remove 0 elements and add 'b'
        expect(fifoArray).toEqual([ 0, 'b', 'a' ]);
    });

    it('should let the user modify the `max` and chop from the end', () => {
        const fifoArray = TsFifoArray<number|string>(5, [ 0, 1, 2, 3, 4 ]);
        expect(fifoArray).toEqual([ 0, 1, 2, 3, 4 ]);

        fifoArray.max = 3;
        expect(fifoArray.max).toEqual(3);
        expect(fifoArray).toEqual([ 0, 1, 2 ]);

        fifoArray.max = 10;
        expect(fifoArray.max).toEqual(10);
        expect(fifoArray).toEqual([ 0, 1, 2 ]);

        fifoArray.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
        expect(fifoArray).toEqual([ 1, 2, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]);
    });

});
