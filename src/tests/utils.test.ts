import { getRandomNumber, getRandomColor, deepClone, unique, toSnakeCase, toCamelCase } from "../utils";

test("get random number", () => {
    const min = 1;
    const max = 10;
    const randomNumber = getRandomNumber(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
});

test("get random color", () => {
    const color = getRandomColor();
    expect(color).toMatch(/^#[0-9A-F]{6}$/i);
});

test("deep clone", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b);
});

test("unique", () => {
    const arr = [1, 2, 3, 2, 1];
    const uniqueArr = unique(arr);
    expect(uniqueArr).toEqual([1, 2, 3]);
});

test("to snake case", () => {
    const str = "HelloWorld";
    const snakeCaseStr = toSnakeCase(str);
    expect(snakeCaseStr).toEqual("hello_world");
});

test("to camel case", () => {
    const str = "hello_world";
    const camelCaseStr = toCamelCase(str);
    expect(camelCaseStr).toEqual("helloWorld");
});
