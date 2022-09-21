const Employee = require('../lib/Employee');

test('creates employee object',() => {
const employee = new Employee();

expect(typeof(employee)).toBe("object");
});

test('create name',() => {
const name = 'Dan';
const employee = new Employee(name);

expect(employee.name).toBe(name);
});

test('create id',() => {
    const id = 12;
    const employee = new Employee('Dan',id);

    expect(employee.id).toBe(id);
});

test('create email', () => {
    const email = 'daniel@chase.com';
    const employee = new Employee('Dan',12,email);

    expect(employee.email).toBe(email);
});

test('get employee name',() => {
    const name = 'Dan';
    const employee = new Employee(name)

    expect(employee.getName()).toBe(name);
});

test('get id',() => {
    const id = 12;
    const employee = new Employee('Dan',id);

    expect(employee.getId()).toBe(id);
})
test('get email', () => { 
    const email = "daniel@chase.com";
    const employee = new Employee('Dan',12,email);

    expect(employee.getEmail()).toBe(email);
})

test('get role',() => {
    const role = 'Employee';
    const employee = new Employee('Dan',12,'daniel@chase.com',role);

    expect(employee.getRole()).toBe(role);
})