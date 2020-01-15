test('toMatch matcher', () => {
    const str = 'http://www.dell-lee.com';
    expect(str).toMatch(/dell/); 
})


test('toContain', () => {
    const arr = ['dell', 'lee', 'imooc'];
    const data = new Set(arr);
    expect(arr).toContain('dell'); 
})

const throwNewErrorFunc = () => {
    throw new Error('this is a new error');
}
test('toThrow', () => {
    expect(throwNewErrorFunc).toThrow('this is a new error'); 
})














