import { add, minus, multi } from './math';


test('testing add 3 + 7', () => {
    expect(add(3, 7)).toBe(10);
})

test('testing minus 3 - 3', () => {
    expect(minus(3, 3)).toBe(0);
})

test('testing multi 3 * 3', () => {
    expect(multi(3, 3)).toBe(9);
})




