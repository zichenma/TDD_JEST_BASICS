import timer  from './timer';


// jest.useFakeTimers(); // 需要配合 jest.runAllTimers()

beforeEach(() => { // 在每个测试前，重新对timers做初始化
    jest.useFakeTimers();  
})

test('timer test', () => {
   const fn = jest.fn();
   timer(fn);
   // jest.runAllTimers(); // 可以让timer马上执行, 需要配合 jest.useFakeTimers()
   // jest.runOnlyPendingTimers(); // 只执行当前队列里即将被执行的timer， 不会运行没有被创建的timer
   jest.advanceTimersByTime(6000) // 可以使得时间快进，需要配合 jest.useFakeTimers()
   expect(fn).toHaveBeenCalledTimes(2); 
})

test('timer1 test', () => {
    const fn = jest.fn();
    timer(fn);
    // jest.runAllTimers(); // 可以让timer马上执行, 需要配合 jest.useFakeTimers()
    // jest.runOnlyPendingTimers(); // 只执行当前队列里即将被执行的timer， 不会运行没有被创建的timer
    jest.advanceTimersByTime(6000) // 可以使得时间快进，需要配合 jest.useFakeTimers()
    expect(fn).toHaveBeenCalledTimes(2); 
 })