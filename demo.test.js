jest.mock('./util'); //只要有jest.mock，就可以放到第一行, 先模拟再导入
// jest.mock 发现util是一个类，会自动把类的构造函数和方法变成jest.fn, 从而进行追溯
// 相当于：
// const Util = jest.fn();
// Util.a = jest.fn();
// Util.b = jest.fn();
import Util from './util';  //使得demoFunction中的Util，指向mock中的Util
import demoFunction from './demo'; 
// 自定义 mock Util class (inline)：
// jest.mock('./util', () => {
//     const Util = jest.fn(() => {
//         console.log('constructor -- inline');
//     });
//     Util.prototype.a = jest.fn(() => {
//         console.log('a -- inline');
//     });
//     Util.prototype.b = jest.fn(() => {
//         console.log('b -- inline');
//     });
//    return Util;
// })
test('test demoFunction', () => {
    demoFunction();
    expect(Util).toHaveBeenCalled();
    // 此时的 Util 已经是一个mock的对象，所有有mock属性
    console.log(Util.mock.instances[0]);
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();

})