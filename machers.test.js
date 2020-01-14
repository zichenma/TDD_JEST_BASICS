// https://jestjs.io/docs/en/using-matchers

//test('testing 10 matches 10', () => {
    // toBe is a matcher (匹配器)
    // similar to: object.is or ===
    // const a = {one: 1};
    // expect(a).toBe({one : 1});
//})

// test('testing obj content is equal or not', () => {
//     // toEqual matches content
//     const a = {one: 1};
//     expect(a).toEqual({one : 1});
// })

 // toBeNull:
// test('testing is null or not', () => {
//     const a = null;
//     // const a = undefined will fail
//     expect(a).toBeNull();
// })

// toBeUndefined

// test('testing is undefined or not', () => {
//     const a = undefined;
//     expect(a).toBeUndefined();
// })

// toBeDefined

// test('testing is undefined or not', () => {
//     const a = 1;
//     expect(a).toBeDefined();
// })

// toBeTruthy

// test('testing is toBeTruthy or not', () => {
//     const a = 1;
//     // if a is null or 0, will be false
//     expect(a).toBeTruthy();
// })

// toBeFalsy

// test('testing is toBeFalsy or not', () => {
//     const a = 0;
//     expect(a).toBeFalsy();
// })

// Not
// test('not matcher', () => {
//     const a = 1;
//     // same as: expect(a).toBeTruthy();
//     expect(a).not.toBeFalsy();
// })

// 数字相关的：
// toBeGreaterThan
// test('toBeGreaterThan matcher', () => {
//     const a = 10;
//     expect(a).toBeGreaterThan(9);
// })

// toBeLessThan
// test('toBeLessThan matcher', () => {
//     const a = 10;
//     expect(a).toBeLessThan(11);
// })

// toBeGreaterThanOrEqual
// test('toBeGreaterThanOrEqaul matcher', () => {
//     const a = 10;
//     expect(a).toBeGreaterThanOrEqual(9);
// })

//  toBeLessThanOrEqual ...

// toBeCloseTo
// test('toBeCloseTo', () => {
//     const firstNumber = 0.1;
//     const secondNumber = 0.2;
//     // JS calculate float will not eaxct be the float 
//     // expect(firstNumber + secondNumber).toEqual(0.3);
//     // Expected: 0.3
//     // Received: 0.30000000000000004
//     expect(firstNumber + secondNumber).toBeCloseTo(0.3);
// })

// String 相关：
// toMatch

// test('toMatch matcher', () => {
//     const str = 'http://www.dell-lee.com';
//     expect(str).toMatch(/dell/); // or 'dell'
// })

// Array, Set 相关
// toContain
// test('toMatch matcher', () => {
//     const arr = ['dell', 'lee', 'imooc'];
//     const data = new Set(arr);
//     expect(arr).toContain('dell'); 
//     // expect(data).toContain('dell'); // same to array
// })

// 异常相关
// toThrow
const throwNewErrorFunc = () => {
    throw new Error('this is a new error');
}
test('toThrow', () => {
    //  expect(throwNewErrorFunc).toThrow(); 
    expect(throwNewErrorFunc).toThrow('this is a new error'); // str or reg
})














