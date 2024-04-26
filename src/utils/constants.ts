import {
  Platform,
  Dimensions,
  PixelRatio,
  I18nManager,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import moment from 'moment';

import {Regex} from './config';
import {getStatusBarHeight} from './themes/statusBar';

//#region progress String
/**
 * The function `keyFirstUpperCase` takes a string as input and returns the same string with the first
 * letter capitalized and the rest of the letters in lowercase.
 * @param {string} [value] - The `value` parameter is an optional string that represents the input
 * value.
 * @returns The function `keyFirstUpperCase` returns a string with the first character capitalized and
 * the rest of the characters in lowercase. If the input `value` is `undefined`, the function returns
 * `undefined`.
 */
const keyFirstUpperCase = (value?: string): string => {
  if (value) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
  return `${value}`;
};

/**
 * The function converts a string to lowercase if it is provided, otherwise it returns undefined.
 * @param {string} [value] - The `value` parameter is an optional string parameter. It represents the
 * value that you want to convert to lowercase. If a value is provided, it will be converted to
 * lowercase using the `toLowerCase()` method. If no value is provided, the function will return
 * `undefined`.
 */
const keyLowerCase = (value?: string): string | undefined =>
  value ? value.toLowerCase() : value;

/**
 * The UpperCase function takes a string as input and returns the uppercase version of the string, or
 * undefined if no input is provided.
 * @param {string} [value] - The parameter "value" is a string that is optional.
 * @returns The function `UpperCase` returns the input string `value` converted to uppercase if it is
 * provided, otherwise it returns `undefined`.
 */
const UpperCase = (value?: string): string | undefined => {
  if (value) {
    return value.toUpperCase();
  }
  return value;
};

/**
 * The `Fixed` function takes a number as input and returns a string representation of the number with
 * two decimal places, or returns `undefined` if the input is not a valid number.
 * @param {number} [value] - The `value` parameter is an optional number that represents the value to
 * be fixed.
 * @returns The function `Fixed` returns a string representation of the input `value` rounded to 2
 * decimal places if `value` is a valid number. If `value` is `undefined`, the function returns
 * `undefined`. If `value` is not a valid number, the function returns a string representation of
 * `value`.
 */
const Fixed = (value?: number): string | undefined => {
  if (value !== undefined && !isNaN(value)) {
    return value.toFixed(2);
  }
  return value?.toString();
};
//#endregion progress String

//#region progress Device

/* The above code is checking if the current platform is Android by comparing the value of the
  `Platform.OS` variable to the string `'android'`. If the current platform is Android, the variable
  `isAndroid` will be assigned the value `true`, otherwise it will be assigned the value `false`. */
const isAndroid = Platform.OS === 'android';
/* The above code is using the DeviceInfo module to check if the device running the code is a tablet.
  It calls the isTablet() function from the DeviceInfo module and assigns the result to the constant
  variable isTablet. */
const isTablet = DeviceInfo.isTablet();

//#endregion progress Device

//#region progress layout
/* The above code is written in TypeScript and it is using the `Dimensions` module from React Native to
  get the height and width of the device's screen. It is then using destructuring assignment to assign
  the height to the variable `_screenHeight` and the width to the variable `_screenWidth`. */
const {height: _screenHeight, width: _screenWidth} = Dimensions.get('window');
/* The above code is checking whether the screen orientation is in portrait mode. It compares the value
  of the `_screenHeight` variable with the value of the `_screenWidth` variable and returns `true` if
  the screen height is greater than the screen width, indicating a portrait orientation. */
const isPortrait = _screenHeight > _screenWidth;
/* The above code is declaring a constant variable `screenHeight` and assigning it a value based on the
  condition `isPortrait`. If `isPortrait` is true, then the value of `_screenHeight` is assigned to
  `screenHeight`, otherwise the value of `_screenWidth` is assigned to `screenHeight`. */
const screenHeight = isPortrait ? _screenHeight : _screenWidth;
/* The above code is declaring a constant variable `screenWidth` and assigning it a value based on the
  condition `isPortrait`. If `isPortrait` is true, then `screenWidth` will be assigned the value of
  `_screenWidth`, otherwise it will be assigned the value of `_screenHeight`. */
const screenWidth = isPortrait ? _screenWidth : _screenHeight;

/**
 * The function `wp` calculates the pixel value of a given width percentage relative to the screen
 * width.
 * @param {number} widthPercent - The `widthPercent` parameter is a number that represents the
 * percentage of the screen width that you want to calculate.
 */
const wp = (widthPercent: number): number =>
  PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);

/**
 * The function `hp` calculates the pixel value of a given percentage of the screen height.
 * @param {number} heightPercent - The `heightPercent` parameter is a number that represents the
 * percentage of the screen height that you want to calculate.
 */
const hp = (heightPercent: number): number =>
  PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);

/* The above code is declaring a constant variable `statusBarHeight` and assigning it the value
  returned by the `getStatusBarHeight()` function. The purpose of the code is to retrieve the height
  of the status bar. */
const statusBarHeight = getStatusBarHeight();

//#endregion progress layout

//#region progress internet

//#endregion progress internet

//#region progress dateTime
/* The code is retrieving the locale (language) of the device. It uses the `Platform.select` function
  to determine the platform (iOS or Android) and then retrieves the locale accordingly. On iOS, it
  uses `NativeModules.SettingsManager.settings.AppleLocale` to get the locale, and on Android, it uses
  `NativeModules.I18nManager.localeIdentifier`. If the locale cannot be determined, it defaults to an
  empty string. */
const Locale = I18nManager.getConstants().localeIdentifier || '';

/**
 * The TimeStamp function calculates the total number of minutes based on the given hour and minute
 * values.
 * @param {number} [hour=0] - The `hour` parameter is a number that represents the hour of the day. It
 * has a default value of 0 if no value is provided.
 * @param {number} [min=0] - The `min` parameter in the `TimeStamp` function represents the number of
 * minutes. It has a default value of 0, which means if no value is provided when calling the function,
 * it will assume 0 minutes.
 */
const TimeStamp = (hour: number = 0, min: number = 0): number =>
  hour * 60 + min;

/**
 * The function `HoursStamp` takes in a number representing minutes and returns a string representing
 * the equivalent hours and minutes.
 * @param {number} min - The `min` parameter represents the number of minutes.
 */
const HoursStamp = (min: number): string =>
  `${Math.floor(min / 60)}:${min % 60}`;

/**
 * The function `AddDate` takes a date and a number of days and returns a new date that is the
 * specified number of days after the input date.
 * @param {Date} [date] - The `date` parameter is an optional parameter of type `Date`. It represents
 * the starting date from which the calculation will be performed. If no value is provided, the current
 * date and time will be used as the starting point.
 * @param {number} [numberDate] - The `numberDate` parameter is the number of days to add to the given
 * date.
 * @returns The function `AddDate` returns a moment object representing the new date after adding the
 * specified number of days to the input date.
 */
const AddDate = (date?: Date, numberDate?: number): moment.Moment => {
  const nowDate = moment(date).unix();
  const addDateTimeStamp = TimeStamp(24, 0) * (numberDate || 0) * 60;
  const newDateUnix = nowDate + addDateTimeStamp;
  return moment.unix(newDateUnix);
};

//#endregion progress dateTime

//#region Math

/**
 * The function "SmallestInArray" takes a number and an array of numbers as input, and returns the
 * smallest number in the array that is greater than or equal to the input number, or the smallest
 * positive number in the array if there is no number greater than or equal to the input number.
 * @param {number} x - The parameter `x` is a number that represents the threshold value. It is used to
 * filter out numbers from the input array that are greater than or equal to `x`.
 * @param {number[]} inputArr - An array of numbers.
 * @returns The function `SmallestInArray` returns the smallest number in the input array that is
 * greater than or equal to the given number `x`. If there is no number in the array that satisfies
 * this condition, it returns the smallest non-negative number in the array.
 */
const SmallestInArray = (x: number, inputArr: number[]): number => {
  let arrNumber: number[] = inputArr.filter(nums => x <= nums);

  if (arrNumber.length >= 1) {
    return Math.min(...arrNumber);
  }

  arrNumber = inputArr.filter(nums => nums >= 0);
  return Math.min(...arrNumber);
};

/**
 * The function calculates a percentage of a given value and returns the result as a string with two
 * decimal places.
 * @param {number | undefined} value - The `value` parameter is a number or undefined. It represents
 * the value to which the percentage will be applied.
 * @param {number} percent - The `percent` parameter is a number that represents the percentage value
 * you want to calculate.
 * @returns a string representation of the calculated percentage value.
 */
const Percent = (value: number | undefined, percent: number): string => {
  if (value !== undefined) {
    const result =
      (parseFloat(value.toString()) / 100) * parseFloat(percent.toString());
    return result.toFixed(2);
  }
  return '';
};

/**
 * The function "Sum" calculates the sum of an array of numbers.
 * @param {number[]} [lst] - The parameter `lst` is an optional parameter of type `number[]`, which
 * means it can be an array of numbers or undefined.
 */
const Sum = (lst?: number[]): number =>
  !lst ? 0 : lst.reduce((accumulator, value) => accumulator + value, 0);

/**
 * The `CompareSort` function is a TypeScript function that returns a compare function for sorting an
 * array of objects based on a specified key and sort order.
 * @param key - The `key` parameter is the property of the objects that you want to sort by. It should
 * be a valid key of the objects in the array you want to sort.
 * @param {SortOrder} [order=asc] - The `order` parameter is a string that can have two possible
 * values: 'asc' or 'desc'. It determines the sorting order of the elements. If 'asc' is specified, the
 * elements will be sorted in ascending order. If 'desc' is specified, the elements will be sorted in
 * @returns The function `CompareSort` returns a compare function of type `CompareFunction<T>`.
 */
type SortOrder = 'asc' | 'desc';
type CompareFunction<T> = (a: T, b: T) => number;
const CompareSort = <T extends Record<string, any>>(
  key: keyof T,
  order: SortOrder = 'asc',
): CompareFunction<T> => {
  return function innerSort(a: T, b: T): number {
    const varA = a?.[key]?.toUpperCase?.();
    const varB = b?.[key]?.toUpperCase?.();

    if (varA === varB) {
      return 0;
    }

    const comparison = varA > varB ? 1 : -1;
    return order === 'desc' ? -comparison : comparison;
  };
};

/**
 * The function "Include" checks if a given array includes a specific element.
 * @param arr - An array of any type of elements.
 * @param {number} id - The `id` parameter is a number that represents the value we want to check if it
 * exists in the array.
 * @returns a boolean value indicating whether the given array includes the specified id.
 */
const Include = (arr: Array<any> = [], id: number): boolean => {
  return arr.includes(id);
};

/* The above code is defining an object called "Maths" which contains several functions. These
  functions are: */
const Maths = {
  SmallestInArray,
  Percent,
  Sum,
  CompareSort,
  Include,
};
//#endregion Math

//#region Function Device

/**
 * The function `isValidIp` checks if a given string is a valid IP address.
 * @param {string} ipaddress - The `ipaddress` parameter is a string that represents an IP address.
 */
const isValidIp = (ipaddress: string): boolean =>
  Regex.ipAddress.test(ipaddress);

/**
 * The function `isValidPhone` checks if a given phone number is valid based on a regular expression
 * and the length of the phone number.
 * @param {number | string} [phone] - The `phone` parameter in the `isValidPhone` function can accept a
 * value of type `number` or `string`. It represents the phone number that needs to be validated.
 * @returns The function `isValidPhone` returns a boolean value.
 */
const isValidPhone = (phone?: number | string): boolean => {
  if (!phone) {
    return false;
  }
  const phoneNumber = phone.toString();
  return (
    Regex.phoneRegex.test(phoneNumber) &&
    phoneNumber.length === Regex.phoneNumberCharacters
  );
};

/**
 * The function `isValidFixEmail` checks if a given email is valid using a regular expression.
 * @param {string} [email] - The `email` parameter is an optional string that represents an email
 * address.
 */
const isValidateEmail = (value?: string): boolean =>
  !value ? false : Regex.email.test(value);

/**
 * The function checks if a given value is a valid password.
 * @param {string} [value] - The `value` parameter is an optional string that represents the password
 * to be validated.
 */
const isValidatePassword = (value?: string): boolean =>
  !value ? false : Regex.password.test(value);

/**
 * The `formatMoney` function takes a number as input and returns a formatted string representation of
 * that number with commas separating thousands.
 * @param {number} [value] - The `value` parameter is a number that represents a monetary value. It is
 * an optional parameter, meaning it can be undefined or null.
 * @returns The function `formatMoney` returns a string.
 */
const formatMoney = (value?: number): string => {
  if (value !== undefined) {
    try {
      const fixedValue = Fixed(value);
      if (fixedValue) {
        return fixedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    } catch (error: any) {
      console.error(`${error.message} ${value}`);
    }
  }
  return value?.toString() || '';
};

/* The above code is defining a TypeScript module named "Format" that contains a single property called
  "Money". The value of "Money" is a function called "formatMoney". */
const Format = {
  Money: formatMoney,
};
//#endregion Function Device

export const Constants = {
  MARGIN5: 5,
  MARGIN6: 6,
  MARGIN10: 10,
  MARGIN12: 12,
  MARGIN14: 14,
  MARGIN16: 16,
  MARGIN20: 20,
  MARGIN28: 28,
  MARGIN30: 30,
  MARGIN40: 40,
  MARGIN50: 50,
  MARGIN60: 60,

  PADDING5: 5,
  PADDING6: 6,
  PADDING10: 10,
  PADDING12: 12,
  PADDING14: 14,
  PADDING16: 16,
  PADDING20: 20,
  PADDING28: 28,
  PADDING30: 30,
  PADDING40: 40,
  PADDING50: 50,
  PADDING60: 60,

  BORDER_RADIUS8: 8,
  BORDER_RADIUS10: 10,
  BORDER_RADIUS12: 12,
  BORDER_RADIUS20: 20,
  BORDER_RADIUS28_5: 28.5,

  ANIM_DURATION100: 100,
  ANIM_DURATION250: 250,
  ANIM_DURATION: 500,
  ANIM_DURATION1500: 1500,

  ANIM_DELAY: 100,

  ACTIVE: 1,
  DISABLE: 0.3,

  IS_ANIMATION_TRUE: true,
  IS_ANIMATION_FALSE: false,

  FONT_WEIGHT_100: '100',
  FONT_WEIGHT_200: '200',
  FONT_WEIGHT_300: '300',
  FONT_WEIGHT_400: '400',
  FONT_WEIGHT_500: '500',
  FONT_WEIGHT_600: '600',
  FONT_WEIGHT_700: '700',
  FONT_WEIGHT_800: '800',
  FONT_WEIGHT_900: '900',

  SIZE_24: 24,
  SIZE_46: 46,
};

export {
  //#region Device
  /* The `isAndroid` variable is a boolean value that indicates whether the current platform is
    Android. It is determined by checking if the `Platform.OS` value is equal to `'android'`. If it
    is, then `isAndroid` is set to `true`, otherwise it is set to `false`. */
  isAndroid,
  /* The `isTablet` variable is a boolean value that indicates whether the current device is a tablet.
    It is determined using the `react-native-device-info` library's `isTablet()` function. If the
    function returns `true`, then `isTablet` is set to `true`, indicating that the device is a tablet.
    Otherwise, it is set to `false`, indicating that the device is not a tablet. */
  isTablet,
  //#endregion Device

  //#region Layout
  /* `screenHeight` is a variable that stores the height of the device's screen. It is calculated based
    on the orientation of the device. If the device is in portrait mode, `screenHeight` will be equal
    to the height of the screen. If the device is in landscape mode, `screenHeight` will be equal to
    the width of the screen. */
  screenHeight,
  /* `screenWidth` is a variable that stores the width of the device's screen. It is calculated based
    on the orientation of the device. If the device is in portrait mode, `screenWidth` will be equal
    to the width of the screen. If the device is in landscape mode, `screenWidth` will be equal to the
    height of the screen. */
  screenWidth,
  // Devices,
  /* The `wp` function is used to calculate the width of a component based on a percentage of the
    screen width. It takes a `widthPercent` parameter, which represents the percentage of the screen
    width that the component should occupy. It then calculates the actual width in pixels by
    multiplying the screen width by the `widthPercent` and dividing it by 100. The result is rounded
    to the nearest pixel using the `PixelRatio.roundToNearestPixel` function. */
  wp,
  /* The `hp` function is used to calculate the height of a component based on a percentage of the
    screen height. It takes a `heightPercent` parameter, which represents the percentage of the screen
    height that the component should occupy. It then calculates the actual height in pixels by
    multiplying the screen height by the `heightPercent` and dividing it by 100. The result is rounded
    to the nearest pixel using the `PixelRatio.roundToNearestPixel` function. */
  hp,
  /* `statusBarHeight` is a variable that stores the height of the device's status bar. The status bar
    is the area at the top of the device's screen that displays information such as the time, battery
    level, and network status. */
  statusBarHeight,
  /* The `isPortrait` variable is a boolean value that indicates whether the device is currently in
    portrait mode. It is determined by comparing the height and width of the device's screen. If the
    height is greater than the width, it means the device is in portrait mode, and `isPortrait` is set
    to `true`. Otherwise, if the width is greater than the height, it means the device is in landscape
    mode, and `isPortrait` is set to `false`. */
  isPortrait,
  //#endregion Layout

  //#region String
  keyFirstUpperCase,
  keyLowerCase,
  UpperCase,
  Fixed,
  //#endregion String

  //#region Internet
  //#endregion Internet

  //#region DateTime
  /* The above code is a comment in TypeScript. It is not performing any specific action or
    functionality in the code. It is used to provide information or explanations about the code for
    developers who read it. */
  TimeStamp,
  /* The above code appears to be a comment in TypeScript. It is using the triple hash symbol ( */
  HoursStamp,
  /* The above code is a comment in TypeScript. It is not performing any specific action or
    functionality in the code. It is simply providing a description or explanation of what the code is
    intended to do. */
  AddDate,
  /* The above code is written in TypeScript and it is defining a module or namespace called "Locale". */
  Locale,
  //#endregion DateTime

  //#region Math
  /* The above code is written in TypeScript and it appears to be a comment section where the author is
    describing the purpose or content of the code. The comment section starts with "Maths" and is
    followed by a series of pound signs ( */
  Maths,
  //#endregion Math

  //#region Function Devices

  /**
   * The function `isValidIp` checks if a given string is a valid IP address.
   * @param {string} ipaddress - The `ipaddress` parameter is a string that represents an IP address.
   */
  isValidIp,

  /**
   * The function `isValidPhone` checks if a given phone number is valid based on a regular expression
   * and the length of the phone number.
   * @param {number | string} [phone] - The `phone` parameter in the `isValidPhone` function can accept a
   * value of type `number` or `string`. It represents the phone number that needs to be validated.
   * @returns The function `isValidPhone` returns a boolean value.
   */
  isValidPhone,

  /**
   * The function `isValidFixEmail` checks if a given email is valid using a regular expression.
   * @param {string} [email] - The `email` parameter is an optional string that represents an email
   * address.
   */
  isValidateEmail,

  /**
   * The function checks if a given value is a valid password.
   * @param {string} [value] - The `value` parameter is an optional string that represents the password
   * to be validated.
   */
  isValidatePassword,

  /* The above code is defining a TypeScript module named "Format" that contains a single property called
  "Money". The value of "Money" is a function called "formatMoney". */
  Format,

  //#endregion Function Devices
};
