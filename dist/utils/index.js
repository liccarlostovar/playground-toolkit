"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToObj = exports.fahrenheitToCelcius = exports.celciusToFahrenheit = exports.generateUUID = exports.isLeapYear = exports.isPrime = exports.isZero = exports.isNegative = exports.isPositive = exports.isOdd = exports.isEven = exports.sortByKey = exports.flattenArray = exports.getRandomColor = exports.isPalindrome = exports.isNumber = exports.isString = exports.isObject = exports.isEmptyObject = exports.capitalizeWords = exports.toTitleCase = exports.toKebabCase = exports.toPascalCase = exports.toCamelCase = exports.toSnakeCase = exports.unique = exports.getRandomNumber = exports.deepClone = void 0;
// deno-lint-ignore-file no-explicit-any
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
exports.deepClone = deepClone;
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.getRandomNumber = getRandomNumber;
const unique = (arr) => {
    return Array.from(new Set(arr));
};
exports.unique = unique;
const toSnakeCase = (str) => {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};
exports.toSnakeCase = toSnakeCase;
const toCamelCase = (str) => {
    return str.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());
};
exports.toCamelCase = toCamelCase;
const toPascalCase = (str) => {
    return str.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase()).replace(/^([a-z])/, (_match, letter) => letter.toUpperCase());
};
exports.toPascalCase = toPascalCase;
const toKebabCase = (str) => {
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};
exports.toKebabCase = toKebabCase;
const toTitleCase = (str) => {
    return str.replace(/\b\w/g, (letter) => letter.toUpperCase());
};
exports.toTitleCase = toTitleCase;
const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (letter) => letter.toUpperCase());
};
exports.capitalizeWords = capitalizeWords;
const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
};
exports.isEmptyObject = isEmptyObject;
const isObject = (obj) => {
    return typeof obj === "object" && obj !== null;
};
exports.isObject = isObject;
const isString = (str) => {
    return typeof str === "string";
};
exports.isString = isString;
const isNumber = (num) => {
    return typeof num === "number";
};
exports.isNumber = isNumber;
const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
};
exports.isPalindrome = isPalindrome;
const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
exports.getRandomColor = getRandomColor;
const flattenArray = (arr) => {
    return arr.flat(Infinity);
    // return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
};
exports.flattenArray = flattenArray;
const sortByKey = (arr, key) => {
    return arr.sort((a, b) => a[key] - b[key]);
};
exports.sortByKey = sortByKey;
const isEven = (num) => {
    return num % 2 === 0;
};
exports.isEven = isEven;
const isOdd = (num) => {
    return num % 2 !== 0;
};
exports.isOdd = isOdd;
const isPositive = (num) => {
    return num > 0;
};
exports.isPositive = isPositive;
const isNegative = (num) => {
    return num < 0;
};
exports.isNegative = isNegative;
const isZero = (num) => {
    return num === 0;
};
exports.isZero = isZero;
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
};
exports.isPrime = isPrime;
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
exports.isLeapYear = isLeapYear;
const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
exports.generateUUID = generateUUID;
const celciusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
};
exports.celciusToFahrenheit = celciusToFahrenheit;
const fahrenheitToCelcius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
};
exports.fahrenheitToCelcius = fahrenheitToCelcius;
const arrayToObj = (arr, key) => {
    return arr.reduce((acc, val) => {
        acc[val[key]] = val;
        return acc;
    }, {});
};
exports.arrayToObj = arrayToObj;
