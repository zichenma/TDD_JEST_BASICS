export const generateConfig = () => {
    return {
        server: 'http://localhost',
        port: 8080,
        domain: 'localhost',
        time: '2020'
    }
}

export const generateAnotherConfig = () => {
    return {
        server: 'http://localhost',
        port: 8080,
        domain: 'localhost',
        time: '2020'
    }
}

// 测试动态数据： new Date()
export const generateThirdConfig = () => {
    return {
        server: 'http://localhost',
        port: 8080,
        domain: 'localhost',
        time: new Date()
    }
}