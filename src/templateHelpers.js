export const listOfItems = defaultValue => v => {
    if (!v) {
        return defaultValue || '<empty list>'
    }
    if (v.length > 1) {
        let foo = v.slice(0, v.length - 1)
            .map(w => w.toString())

        foo.push(`and ${v[v.length - 1]}`)
        if (foo.length > 2) {
            // [x, y, z] -> "x, y, and z"
            return foo.join(', ')
        } else {
            // [x, y] -> "x and y"
            return foo.join(' ')
        }
    } else if (v.length === 1) {
        // [x] -> "x"
        return v[0];
    } else {
        return defaultValue || '<empty list>'
    }
}

export const each = template => v => v.map(w => template(w)).join('\n\n')

export const prefixIfDefined = prefix => v => v && `${prefix}${v}`

export const byValue = values => v => values[v]