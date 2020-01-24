// 自定义 mock Util class：

const Util = jest.fn(() => {
    console.log('constructor');
});
Util.prototype.a = jest.fn(() => {
    console.log('a');
});
Util.prototype.b = jest.fn(() => {
    console.log('b');
});

export default Util;