import { fetchData } from './fetchData';
// 回调类型异步函数的测试
// test('fetchData return { success: true }',  done => {
//     fetchData(data => {
//         expect(data).toEqual({
//             success: true
//         })
//         done();
//     })
// })

// 非回调类型异步函数的测试
// test('fetchData return {success：true}', () => {
//     return fetchData().then(response => {
//         expect(response.data).toEqual({
//             success: true
//         })
//     })
// })

test('fetchData return 404', () => {
    // assertions 语句规定了expect 必须执行一次，因为如果没有
    // 若api请求有有效结果，catch就不会被执行，一定会返回true
    // 所以assertions保证了，expect必须会执行，无论请求结果是否有效
    expect.assertions(1);
    return fetchData().catch(e => {
        expect(e.toString().indexOf('404') > -1).toBe(true)
    })
})