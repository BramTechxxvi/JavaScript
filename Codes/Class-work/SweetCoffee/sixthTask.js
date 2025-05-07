const findNestedKey = (obj, specifiKey)=> {
    for (let key in obj) {
        if (key === specifiKey) return obj[key];
        if (typeof obj[key] === 'object' && obj[key] != null) {
            const result = findNestedKey(obj[key], specifiKey)
            if (result !== undefined) return result
        }
    } return null;
}
module.exports = findNestedKey;