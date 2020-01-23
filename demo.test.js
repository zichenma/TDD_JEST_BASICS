import { fetchData } from './demo';
const { getNumber } = jest.requireActual('./demo');
// import Axios from 'axios';



// jest.mock('axios');

// test('test fetchData', () => {
//     Axios.get.mockResolvedValue({
//         data: "(function(){return '123'})()",
//     })
//     return fetchData().then(data => {
//         expect(eval(data)).toEqual('123')
//     })
// })

// Change the async test to sync test:  

jest.mock('./demo'); // no need this part after change automock:true 
// jest.unmock('./demo'); cancel mock

test('test fetchData', () => {
    return fetchData().then(data => {
        expect(eval(data)).toEqual('123')
    })
})

test('test getNumber', () => {
    expect(getNumber()).toEqual(123)
})