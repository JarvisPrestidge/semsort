/**
 * Sorts an input array of SemVar formatted strings by version
 *
 * @param {string[]} input
 * @returns {{ original: string, comparison: string }[]}
 */
const sortSemVarArray = (input: string[]): { original: string; comparison: number }[] => {

    /**
     * Description:
     *
     * • The below algorithm first finds the max number of version part in
     *   the input array. This is crucial to normalize all other array elements.
     *
     * • It then holds a reference to the original value while replacing
     *   subsequent digits with a fixed width padding integer of 1000.
     *
     * • Normalizes those versions with fewer parts than the max by pushing 0
     *   values into the array, until the array length is equal to the max.
     *
     *  v1.22.33        -> [1001, 1022, 1033, 0000]
     *  v1.22.33-pre1   -> [1001, 1022, 1033, 1001]
     *
     * • Then joins the values and sorts then in descending value.
     *
     * i.e. [1001, 1022, 1033, 1002] -> 1001102210331002
     *
     */

    const versionParts = input
        .map((a) => a.split(/\D+/g)
        .filter((b) => b).length);

    const maxVersionParts = Math.max(...versionParts);

    const result = input
        .map((a) => ({ original: a, comparison: a }))
        .map((a) => {
            const versionPartsArray = a.comparison
                .split(/\D+/g)
                .filter((b) => b);

            while (versionPartsArray.length < maxVersionParts) {
                versionPartsArray.push("0");
            }

            const comparisonString = versionPartsArray
                .map((c) => parseInt(c) + 1000)
                .join("");

            const comparison = parseInt(comparisonString);

            return { ...a, comparison };
        });


    return result;
};

/**
 * Sorts an input array of sem var formatted strings by descending version
 *
 * @param {string[]} input
 * @returns {string[]}
 */
const desc = (input: string[]): string[] => {

    if (!input) {
        return [];
    }

    const intermediateResult = sortSemVarArray(input);

    const result = intermediateResult
        .sort((l, r) => r.comparison - l.comparison)
        .map((a) => a.original);

    return result;
}

/**
 * Sorts an input array of sem var formatted strings by ascending version
 *
 * @param {string[]} input
 * @returns {string[]}
 */
const asc = (input: string[]): string[] => {

    if (!input) {
        return [];
    }

    const intermediateResult = sortSemVarArray(input);

    const result = intermediateResult
        .sort((l, r) => l.comparison - r.comparison)
        .map((a) => a.original);

    return result;
}


export {
    asc,
    desc
}
