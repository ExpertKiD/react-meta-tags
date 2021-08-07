import {Greeter} from "../index";

Greeter('Suman');

test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
})