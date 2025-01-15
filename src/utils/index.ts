// deno-lint-ignore-file no-explicit-any
export const deepClone = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
};

export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const unique = (arr: any[]) => {
    return Array.from(new Set(arr));
};

export const toSnakeCase = (str: string) => {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).replace(/^_/, "");
};
export const toCamelCase = (str: string) => {
    return str.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());
};
export const toPascalCase = (str: string) => {
    return str.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase()).replace(/^([a-z])/, (_match, letter) => letter.toUpperCase());
};

export const toKebabCase = (str: string) => {
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};
export const toTitleCase = (str: string) => {
    return str.replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, (letter) => letter.toUpperCase());
};
export const isEmptyObject = (obj: any) => {
    return Object.keys(obj).length === 0;
};
export const isObject = (obj: any) => {
    return typeof obj === "object" && obj !== null;
};
export const isString = (str: any) => {
    return typeof str === "string";
};
export const isNumber = (num: any) => {
    return typeof num === "number";
};
export const isPalindrome = (str: string) => {
    return str === str.split("").reverse().join("");
};
export const getRandomColor = () => {
    let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return color;
};

export const flattenArray = (arr: any[]) => {
    return arr.flat(Infinity);
    // return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
};
export const sortByKey = (arr: any[], key: string) => {
    return arr.sort((a, b) => a[key] - b[key]);
};
export const isEven = (num: number) => {
    return num % 2 === 0;
};

export const isOdd = (num: number) => {
    return num % 2 !== 0;
};
export const isPositive = (num: number) => {
    return num > 0;
};
export const isNegative = (num: number) => {
    return num < 0;
};
export const isZero = (num: number) => {
    return num === 0;
};
export const isPrime = (num: number) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};
export const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
export const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

export const celciusToFahrenheit = (celsius: number) => {
    return (celsius * 9) / 5 + 32;
};
export const fahrenheitToCelcius = (fahrenheit: number) => {
    return ((fahrenheit - 32) * 5) / 9;
};
export const arrayToObj = (arr: any[], key: string) => {
    return arr.reduce((acc, val) => {
        acc[val[key]] = val;
        return acc;
    }, {});
};
