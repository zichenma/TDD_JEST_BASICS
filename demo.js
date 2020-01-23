import axios from 'axios';

export const runCallback = (callback) => {
    // 如果不加 return 测试则不会通过
    // return callback();
    callback('abc');
}

// 接收一个类，创建一个实例
export const createObject = classItem => {
    new classItem();
}

export const getData = () => {
    return axios.get('/api').then(res => res.data)
}
