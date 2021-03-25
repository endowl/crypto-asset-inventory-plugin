import get from 'lodash/get.js'
import isArray from 'lodash/isArray.js'
import isFunction from 'lodash/isFunction.js'
import isString from 'lodash/isString.js'
import isObject from 'lodash/isObject.js'
import flattenDeep from 'lodash/flattenDeep.js'
import zip from 'lodash/zip.js'

export default (strings, ...keys) => templates => values => {
    const boilerplate = [...strings]
    boilerplate[0] = boilerplate[0].trimStart()
    boilerplate[boilerplate.length - 1] = boilerplate[boilerplate.length - 1].trimEnd()
    const dict = values ?? {}
    const subTemps = templates ?? {}
    const result = keys.map((key, i) => {
        const v = get(dict, key)
        if (subTemps[key]) {
            if (isFunction(subTemps[key])) {
                return subTemps[key](v)
            } else if (isString(subTemps[key])) {
                return subTemps[key]
            } else {
                throw('unknown template type')
            }
        }
        if (isString(v)) {
            return v
        } else if (isArray(v) || isObject(v)) {
            throw 'arrays and objects require a template'
        } else {
            return ''
        }
    })
    return flattenDeep(zip(boilerplate, result)).join('')
}

