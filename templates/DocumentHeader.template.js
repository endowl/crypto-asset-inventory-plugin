import Templatize from "../src/Templatize.js"
import {byValue} from "../src/templateHelpers.js"

export default Templatize`

${ 'status' }

Today's Date: ${ 'date_signed' }

`({
    status: byValue({
        'in-progress': '# This document is a WORK IN PROGRESS',
        'revoked': '# This document has been REVOKED'
    })
})
