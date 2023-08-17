import { sayHello } from "../src/say-hello"

describe('sayHello', () => {
    it('should return hello andry', () => {
        expect(sayHello('andry')).toBe('Hello andry');
    })
})