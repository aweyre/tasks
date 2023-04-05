/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numbers2: number[] = [];
    if (numbers.length == 1) {
        numbers2.push(numbers[0]);
        numbers2.push(numbers[0]);
    } else if (numbers.length > 1) {
        numbers2.push(numbers[0]);
        numbers2.push(numbers[numbers.length - 1]);
    }
    return numbers2;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convert = numbers.map((number: string): number =>
        Number.isNaN(parseInt(number, 10)) == false ? parseInt(number, 10) : 0
    );
    return convert;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeSign = amounts.map((amount: string): string =>
        amount.charAt(0) === "$" ? amount.substring(1, amount.length) : amount
    );
    const convert = removeSign.map((number: string): number =>
        Number.isNaN(parseInt(number, 10)) == false ? parseInt(number, 10) : 0
    );
    return convert;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const endsWith = (message: string): boolean =>
        message.charAt(message.length - 1) !== "?";
    const filterQuestions = messages.filter(endsWith);
    const modify = filterQuestions.map((filter: string): string =>
        filter.charAt(filter.length - 1) === "!" ? filter.toUpperCase() : filter
    );
    return modify;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const fourletters = (word: string): boolean => word.length < 4;
    const lessThan = words.filter(fourletters);
    return lessThan.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const check = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return check;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const sumString = addends.join("+");
    if (sum == 0) {
        return sum + "=0";
    }
    return sum + "=" + sumString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const findNegative = values.findIndex(
        (value: number): boolean => value < 0
    );
    if (findNegative != -1) {
        const reduceSum = values.slice(0, findNegative);
        const rest = values.slice(findNegative + 1);
        const sum = reduceSum.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const clonedValues = [...reduceSum, values[findNegative], sum, ...rest];
        return clonedValues;
    } else {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const clonedValues = [...values, sum];
        return clonedValues;
    }
}