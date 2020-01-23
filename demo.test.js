import {
  generateConfig,
  generateAnotherConfig,
  generateThirdConfig
} from "./demo";

// test('test generateConfig', () => {
//     // expect(generateConfig()).toEqual({
//     //     server: 'http://localhost',
//     //     port: 8080,
//     //     domain: 'localhost'
//     // })
//     expect(generateConfig()).toMatchSnapshot();
// });

// test('test generateAnotherConfig', () => {
//     expect(generateAnotherConfig()).toMatchSnapshot();
// });

test.('test generateThirdConfi', () => {
    expect(generateThirdConfig()).toMatchSnapshot({
        time : expect.any(Date) // Eg，Number, String....
    });
});

// 需要安装： npm install prettier@1.18.2 再用 toMatchInlineSnapshot: 
test.only("test generateThirdConfi", () => {
  expect(generateThirdConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
