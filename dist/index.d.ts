interface ImagesService {
    config: ImagesServiceConfiguration;
    fetchImages: (page?: number, limit?: number) => Promise<ImageItem[]>;
}
interface ImagesServiceConfiguration {
    baseUrl: string;
    limit: number;
}
interface ImageItem {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

declare const imagesService: ImagesService;

declare const deepClone: (obj: any) => any;
declare const getRandomNumber: (min: number, max: number) => number;
declare const unique: (arr: any[]) => any[];
declare const toSnakeCase: (str: string) => string;
declare const toCamelCase: (str: string) => string;
declare const toPascalCase: (str: string) => string;
declare const toKebabCase: (str: string) => string;
declare const toTitleCase: (str: string) => string;
declare const capitalizeWords: (str: string) => string;
declare const isEmptyObject: (obj: any) => boolean;
declare const isObject: (obj: any) => boolean;
declare const isString: (str: any) => str is string;
declare const isNumber: (num: any) => num is number;
declare const isPalindrome: (str: string) => boolean;
declare const getRandomColor: () => string;
declare const flattenArray: (arr: any[]) => any[];
declare const sortByKey: (arr: any[], key: string) => any[];
declare const isEven: (num: number) => boolean;
declare const isOdd: (num: number) => boolean;
declare const isPositive: (num: number) => boolean;
declare const isNegative: (num: number) => boolean;
declare const isZero: (num: number) => num is 0;
declare const isPrime: (num: number) => boolean;
declare const isLeapYear: (year: number) => boolean;
declare const generateUUID: () => string;
declare const celciusToFahrenheit: (celsius: number) => number;
declare const fahrenheitToCelcius: (fahrenheit: number) => number;
declare const arrayToObj: (arr: any[], key: string) => any;

export { type ImageItem, type ImagesService, type ImagesServiceConfiguration, arrayToObj, capitalizeWords, celciusToFahrenheit, deepClone, fahrenheitToCelcius, flattenArray, generateUUID, getRandomColor, getRandomNumber, imagesService, isEmptyObject, isEven, isLeapYear, isNegative, isNumber, isObject, isOdd, isPalindrome, isPositive, isPrime, isString, isZero, sortByKey, toCamelCase, toKebabCase, toPascalCase, toSnakeCase, toTitleCase, unique };
