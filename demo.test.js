import addDivToBody from './demo';
import $ from 'jquery';

test('test addDivToBody', () => {
    addDivToBody();
    addDivToBody();
    // console.log($('body').find('div').length);
    expect($('body').find('div').length).toBe(2);
});

// node 不具备 dom 
// jest 在 node 环境下自己模拟了一套 dom 的 api, jsDom 

