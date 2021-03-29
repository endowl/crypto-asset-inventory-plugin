import Templatize from 'backtickify'
import {each} from 'backtickify/helpers'
import {getById} from 'backtickify/dataStore'

const Contact = Templatize`
#### ${ 'full_name' }
${ 'address' }
${'phone'}
${'email'}
`({
    'address': Templatize`* Address: ${'address'}`(),
    'phone': Templatize`* Phone: ${'phone'}`(),
    'email': Templatize`* Email: ${'email'}`()
})

export default Templatize`
## ${'/grantor/full_name'}'s Trusted Helpers
For help accessing my crypto assets, it is important to use helpers who are knowledgable and highly trustworthy. Here is a list of people that I believe are knowledable and will act with honesty and integrity.

*These assets cannot be recovered if stolen, so choose a helper carefully.*

${ '.' }
`({
    '.': each(v => Contact(getById('contacts', v)))
})