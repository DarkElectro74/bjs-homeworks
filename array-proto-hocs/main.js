'use strict';
function compareArrays(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2) ? true : false;
}
compareArrays([8, 1, 2], [8, 1, 2]);

function memoize(fn, limit) {

    let results = [];

    return function () {
        for (let i = 0; i < results.length; i++) {

            let args = results[i].args;

            if (compareArrays(args, arguments)) {
                return args;
            }
        }

        results = results.slice(0, limit);

        results.unshift({
            args: [...arguments],
            result: fn(...arguments)
        });
        return fn(...arguments);
    };
}

const sum = (a, b) => a + b;
const mSum = memoize(sum, 2);

mSum(3, 11);

console.log(mSum(3, 11));