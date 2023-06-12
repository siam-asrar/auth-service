// sending keys as am array = ['page', 'limit', 'sortBy', orderBy]

const pick = <T extends Record<string, unknown>, k extends keyof T>(obj: T, keys: k[]): Partial<T> => {

    const finalObj: Partial<T> = {} // optional, certain keys from within the object may come;

    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key)) {// if an object is found and that object hs keys
            finalObj[key] = obj[key] // push into the final/construct obj
        }
    }
    return finalObj
}

export default pick