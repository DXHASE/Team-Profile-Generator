const Engineer = require('../lib/Engineer');

test('create github',() => {
const github = 'DXHASE';
const employee = new Engineer('Dan',12,'daniel@chase.com',github);

expect(employee.github).toBe(github);
})

test('get role method',()=>{
    const role = 'Engineer';
    const employee = new Engineer('Dan',12,'daniel@chase.com','DXHASE');

    expect(employee.getRole()).toBe(role);
})

test('get github method',()=>{
    const github = 'DXHASE';
    const employee = new Engineer('Dan',12,'daniel@chase.com',github);

    expect(employee.getGithub()).toBe(github);
})