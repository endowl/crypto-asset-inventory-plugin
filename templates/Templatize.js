import get from 'lodash/get.js'
import isArray from 'lodash/isArray.js'
import isString from 'lodash/isString.js'
import isObject from 'lodash/isObject.js'

export default (strings, ...keys) => templates => values => {
    const dict = values ?? {}
    const subTemps = templates ?? {}
    const result = [strings[0]]
    keys.forEach((key, i) => {
        const v = get(dict, key)
        if (isString(v)) {
            result.push(v)
        } else if (isArray(v)) {
            if (subTemps[key]) {
                Array.prototype.push.apply(result, v.map(w => subTemps[key](w)))
            } else {
                result.push(v.map(w => w.toString()).join(', '))
            }
        } else if (isObject(v)) {
            result.push(subTemps[key](v))
        }
        result.push(strings[i + 1])
    })
    return result.join('')
}

