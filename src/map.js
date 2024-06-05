/** 
 * @param {any[]} inputArray
 * @param {function(any): any} callbackFn
 * @returns {any[]} input array after a call back fn is called
 */
function map(inputArray, callbackFn) {
    const result = []

    for (let element of inputArray) {
        const newElement = callbackFn(element)
        result.push(newElement);
    }

    return result;
}

export { map };
