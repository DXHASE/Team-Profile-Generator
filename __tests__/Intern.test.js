const Intern = require('../lib/Intern');

test('gets school name',() => {
    const school = 'UTSA';
    const employee = new Intern('Dan',12,'daniel@chase.com',school);

    expect(employee.school).toBe(school);
})

test('get role method',() => {
    const role = 'Intern';
    const employee = new Intern('Dan',12,'daniel@chase.com','UTSA');

    expect(employee.getRole()).toBe(role);
})

test('get school method',() => {
    const school = 'UTSA';
    const employee = new Intern('Dan',12,'daniel@chase.com',school);

    expect(employee.getSchool()).toBe(school);
})