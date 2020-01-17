import Counter from './Counter';

describe('Counter tesing cdoe'), () => {
 // 相当于在左右componet， 自动添加
 let counter = null;
 console.log('describe 1');
//beforeAll 钩子函数，用于初始化，在所有测试用例前会被调用
// 执行顺序： 1
beforeAll(() => {
    console.log('beforeAll');
})

// 为每一个测试用例初始化对象
// 执行顺序： 2
beforeEach(() => {
    console.log('beforeEach');
    counter = new Counter();
});

// 执行顺序： 3
afterEach(() => {
    console.log('afterEach');
});



// 执行顺序： 4
afterAll(() => {
    console.log('After all');
})

describe('testing add relatived code', () => {
    console.log('describe 2');

    beforeEach(() => {
        console.log('beforeEach, test add');
    })

    beforeAll(() => {
        console.log('beforeAll test add');
    })
    // only test this test case
    test.only('test addOne in Counter', () => {
        console.log('addOne in Counter');
        counter.addOne();
        expect(counter.number).toBe(1);
    });
    
    test('test addTwo in Counter', () => {
        console.log('addOne in Counter');
        counter.addTwo();
        expect(counter.number).toBe(2);
    });
})


describe('testing minus relatived code', () => {
    console.log('describe 3');

    test('test addOne in Counter', () => {
        console.log('addOne in Counter');
        counter.minusOne();
        expect(counter.number).toBe(1);
    });
    
    test('test minus in Counter', () => {
        console.log('addOne in Counter');
        counter.addTwo();
        expect(counter.number).toBe(2);
    });
})

test('test minusOne in Counter', () => {
    console.log('minusOne in Counter');
    counter.minusOne();
    expect(counter.number).toBe(-1);
});

test('test minusTwo in Counter', () => {
    console.log('minusTwo in Counter');
    counter.minusTwo();
    expect(counter.number).toBe(-2);
});
}


// describe {
//     console.log(1)
//             1. beforeAll
//             3 .beforeEach
//         describe {
//             2. beforeAll
//             4. beforeEach
//         }
//     console.log(2)
//         5. afterEach
//         6. afterAll
// }



