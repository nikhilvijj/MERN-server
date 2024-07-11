// mock.test.js
// mock getData and Process the Mocked Data

jest.mock('./test/utils',()=>({
    getData:jest.fn(),
    getRaw : jest.fn()
}))

  const { getData, getRaw } = require('./test/utils');
  const { processData, processRaw} = require('./test/processData');
  
  test('Mocked the process data', () => {
    // mock the return value of getData
    getData.mockReturnValue('Mocked data');
    
    // call processData and check the result
    const result = processData();
    expect(result).toBe('Process:Mocked data');
  });

  test('Mocked the Raw data', () => {
    
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true)
  });