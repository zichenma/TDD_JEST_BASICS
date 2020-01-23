import { runCallback, createObject, getData } from './demo';
import axios from 'axios';
jest.mock('axios');

test.only('test runCallback', () => {
    // const func = jest.fn(); // mock 函数可以捕获函数的调用
    // 如果 runCallback 被执行了，则runCallback肯定没有问题

    // 测试runCallback是否被调用两次:
    // runCallback(func);
    // runCallback(func);
    // expect(func.mock.calls.length).toBe(2);
    // console.log(func.mock); //result:
    // { calls: [ [ 'abc' ], [ 'abc' ] ],
    //   instances: [ undefined, undefined ],
    //   invocationCallOrder: [ 1, 2 ],
    //   results:
    //    [ { type: 'return', value: undefined },
    //      { type: 'return', value: undefined } ] }

    //测试callback传递参数是否是'abc':
    // runCallback(func);
    // expect(func.mock.calls[0]).toEqual(['abc']);

    //测试callback被执行顺序：
    // const func = jest.fn(() => '456'); same as:
    // func.mockImplementation(() => {
    //     return '456';
    // })
    // return different results:
    // func.mockImplementationOnce(() => {
    //     return '456';
    // })
    // func.mockInplementationOnce(() => {
    //     return '789'
    // })
    const func = jest.fn();
    // func.mockReturnThis(); // same as:
    // func.mockImplementation(() => {
    //     return this;
    // })

    // expect(func.mock.results[0].value).toBeUndefined();

    // func.mockReturnValue('dell') // 每一次都是dell
    func.mockReturnValueOnce('Dell')
    .mockReturnValueOnce('Lee')
    .mockReturnValueOnce('Hello');
    runCallback(func);
    runCallback(func);
    runCallback(func);
    expect(func.mock.calls.length).toBe(3); //断言
    expect(func.mock.results[0].value).toBe('dell');
    // console.log(func.mock);
    // { calls: [ [ 'abc' ], [ 'abc' ], [ 'abc' ] ],
    //   instances: [ undefined, undefined, undefined ],
    //   invocationCallOrder: [ 1, 2, 3 ],
    //   results:
    //    [ { type: 'return', value: 'Dell' },
    //      { type: 'return', value: 'Lee' },
    //      { type: 'return', value: 'Hello' } ] }
})

// 第一次调用func的参数是abc
// expect(func.mock.calls[0]).toEqual(['abc']);
// 每一次调用的参数都是abc
// expect(func).toBecalledWith(['abc']);


// instances 指的是每一次func运行的时候，他的this指向
// test.only('测试 createObject', () => {
    // Jest.fn()的作用：
    // const func = jest.fn(); // 	1. 捕获函数的调用和返回结果，以及this和调用顺序
    // createObject(func); //  2.它可以让我们自由的设置返回结果
    // console.log(func.mock);
    // { calls: [ [] ],
    //     instances: [ mockConstructor {} ], // 因为被new了，所以有constructord
    //     invocationCallOrder: [ 1 ],
    //     results: [ { type: 'return', value: undefined } ] }
// })

// 3. 改变函数的内部实现 (由异步请求变成模拟同步请求)
test('Testing getData', async () => {
    axios.get.mockResolvedValueOnce({data: 'hello'})
    axios.get.mockResolvedValueOnce({data: 'world'})
    await getData().then((data) => {
        expect(data).toBe('hello');
    });
    await getData().then((data) => {
        expect(data).toBe('world');
    });
})

