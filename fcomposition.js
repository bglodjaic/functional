'use strict';

const sequence2 = (f1, f2) => (...args) => f2(f1(...args));

const sequence = (f1, ...fns) => fns.reduce(sequence2, f1);

const f1 = (a, b, c) => a + b + c;
const f2 = x => x + 1;
const f3 = x => x * 2;

console.log('manual: ', f3(f2(f1(1,2,3))));
// console.log('2', sequence2(f1, f2)(2,3));
console.log('fcompose: ', sequence(f1, f2, f3)(1,2,3));

