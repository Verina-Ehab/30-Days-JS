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


//#endregion


//#region --2665. Counter II--


//#endregion
