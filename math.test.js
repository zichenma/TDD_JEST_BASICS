// var result = add( 3, 7);
// var expected = 10;

// if (result !== 10) {
//     throw Error(`3 + 7 should equal ${expected}, but the result is ${result};`);
// }

// var result = minus(3, 3);
// var expected = 0;

// if (result !== 0) {
//     throw Error(`3 - 3 should equal ${expected}, but the result is ${result};`);
// }

function expect(actual) {
    return {
        toBe: function(expected) {
            if (expected != actual) {
                throw new Error(`Expected is not equal actual value, expected ${expected} result is ${actual}.`);
            }
        }
    }
}

function test(desc, fn) {
    try {
        fn();
        console.log(`${desc} is passed testing`);
    }catch(e) {
        console.log(`${desc} is NOT passed testing ${e}`);
    }
}

test('testing add 3 + 7', () => {
    expect(add(3, 7)).toBe(10);
})

test('testing minus 3 - 3', () => {
    expect(minus(3, 3)).toBe(0);
})

test('testing multi 3 * 3', () => {
    expect(minus(3, 3)).toBe(9);
})



