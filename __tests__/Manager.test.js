const Manager = require('../lib/Manager');


test('gets office number',() => {
    const officeNumber = 45;
    const employee = new Manager('Dan',12,'daniel@chase.com',officeNumber);

    expect(employee.officeNumber).toBe(officeNumber)
})

test('get role method',() => {
const role = 'Manager';
const employee = new Manager('Dan',12,'daniel@chase.com',45);

expect(employee.getRole()).toBe(role);
})

test('gets office number method',() => {
    const officeNumber = 45;
    const employee = new Manager('Dan',12,'daniel@chase.com',officeNumber);

    expect(employee.getOfficeNumber()).toBe(officeNumber);
})