// leetcode.com 30 Days of JavaScript challenge
// https://leetcode.com/u/ttYvxdnqGN/

//#region --2667. Create Hello World Function--
var createHelloWorld = function () {

    return function (...args) {
        return "Hello World";
    }
};
//#endregion


//#region --2620. Counter--
var createCounter = function (n) {
    // n -= 1
    return function () {
        // return n += 1
        return n++;
    };
};
//#endregion


//#region --To Be Or Not To Be--

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (n) => {
            if (val === n) {
                return true
            }
            else {
                throw new Error('Not Equal')
            }
        },

        notToBe: (n) => {
            if (val !== n) {
                return true
            }
            else {
                throw new Error('Equal')
            }
        }
    }
};
//#endregion


//#region --2665. Counter II--

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let n = init
    return {
        increment: () => {
            return ++n
        },
        decrement: () => {
            return --n
        },
        reset: () => {
            n = init
            return init
        }
    }

};
//#endregion
