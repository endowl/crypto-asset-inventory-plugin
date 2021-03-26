import Templatize from '../src/Templatize.js'
import {each} from '../src/templateHelpers.js'
import {getById} from "../src/root.js";

const Contact = Templatize`
#### ${ 'full_name' }
${ 'address' }
${'phone'}
${'email'}
`({
    'address': Templatize`* Address: ${'address'}<br>`(),
    'phone': Templatize`* Phone: ${'phone'}<br>`(),
    'email': Templatize`* Email: ${'email'}<br>`()
})

export default Templatize`
## Trusted Helpers
For help accessing my crypto assets, it is import to use helpers who are knowledgable and highly trustworthy. Here is a list of people that I believe are knowledable and will act with honesty and integrity.

*These assets cannot be recovered if stolen, so choose a helper carefully.*

${ '*' }
`({
    '*': each(v => Contact(getById('contacts', v)))
})