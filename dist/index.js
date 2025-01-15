"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Test: () => Test,
  arrayToObj: () => arrayToObj,
  capitalizeWords: () => capitalizeWords,
  celciusToFahrenheit: () => celciusToFahrenheit,
  deepClone: () => deepClone,
  fahrenheitToCelcius: () => fahrenheitToCelcius,
  flattenArray: () => flattenArray,
  generateUUID: () => generateUUID,
  getRandomColor: () => getRandomColor,
  getRandomNumber: () => getRandomNumber,
  imagesService: () => imagesService,
  isEmptyObject: () => isEmptyObject,
  isEven: () => isEven,
  isLeapYear: () => isLeapYear,
  isNegative: () => isNegative,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isOdd: () => isOdd,
  isPalindrome: () => isPalindrome,
  isPositive: () => isPositive,
  isPrime: () => isPrime,
  isString: () => isString,
  isZero: () => isZero,
  sortByKey: () => sortByKey,
  toCamelCase: () => toCamelCase,
  toKebabCase: () => toKebabCase,
  toPascalCase: () => toPascalCase,
  toSnakeCase: () => toSnakeCase,
  toTitleCase: () => toTitleCase,
  unique: () => unique
});
module.exports = __toCommonJS(index_exports);

// src/loremPicsum/imagesService.ts
var defaultConfig = {
  baseUrl: "https://picsum.photos",
  limit: 30
};
var imagesService = {
  config: {
    baseUrl: defaultConfig.baseUrl,
    limit: defaultConfig.limit
  },
  fetchImages: (page = 0, limit = ((_a) => (_a = imagesService.config.limit) != null ? _a : 30)()) => {
    const { baseUrl } = __spreadValues(__spreadValues({}, defaultConfig), imagesService.config);
    return fetch(`${baseUrl}/v2/list?page=${page}&limit=${limit}`).then((response) => response.json());
  }
};

// src/utils/index.ts
var deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
var getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var unique = (arr) => {
  return Array.from(new Set(arr));
};
var toSnakeCase = (str) => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).replace(/^_/, "");
};
var toCamelCase = (str) => {
  return str.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());
};
var toPascalCase = (str) => {
  return str.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase()).replace(/^([a-z])/, (_match, letter) => letter.toUpperCase());
};
var toKebabCase = (str) => {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
};
var toTitleCase = (str) => {
  return str.replace(/\b\w/g, (letter) => letter.toUpperCase());
};
var capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (letter) => letter.toUpperCase());
};
var isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};
var isObject = (obj) => {
  return typeof obj === "object" && obj !== null;
};
var isString = (str) => {
  return typeof str === "string";
};
var isNumber = (num) => {
  return typeof num === "number";
};
var isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};
var getRandomColor = () => {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
};
var flattenArray = (arr) => {
  return arr.flat(Infinity);
};
var sortByKey = (arr, key) => {
  return arr.sort((a, b) => a[key] - b[key]);
};
var isEven = (num) => {
  return num % 2 === 0;
};
var isOdd = (num) => {
  return num % 2 !== 0;
};
var isPositive = (num) => {
  return num > 0;
};
var isNegative = (num) => {
  return num < 0;
};
var isZero = (num) => {
  return num === 0;
};
var isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
var isLeapYear = (year) => {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
var generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
};
var celciusToFahrenheit = (celsius) => {
  return celsius * 9 / 5 + 32;
};
var fahrenheitToCelcius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
};
var arrayToObj = (arr, key) => {
  return arr.reduce((acc, val) => {
    acc[val[key]] = val;
    return acc;
  }, {});
};

// src/index.ts
console.log("Initialized the library");
var Test = () => __async(void 0, null, function* () {
  console.log("Lorem Picsum service configuration", imagesService.config);
  console.log("utils.getRandomNumber", getRandomNumber(1, 10));
  console.log("utils.getRandomColor", getRandomColor());
});
Test();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Test,
  arrayToObj,
  capitalizeWords,
  celciusToFahrenheit,
  deepClone,
  fahrenheitToCelcius,
  flattenArray,
  generateUUID,
  getRandomColor,
  getRandomNumber,
  imagesService,
  isEmptyObject,
  isEven,
  isLeapYear,
  isNegative,
  isNumber,
  isObject,
  isOdd,
  isPalindrome,
  isPositive,
  isPrime,
  isString,
  isZero,
  sortByKey,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toTitleCase,
  unique
});
//# sourceMappingURL=index.js.map