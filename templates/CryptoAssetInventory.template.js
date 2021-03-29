import Templatize from 'backtickify'
import {each} from 'backtickify/helpers'
import Wallet from './Wallet.template.js'
import Header from './DocumentHeader.template.js'
import TrustedHelpers from './TrustedHelpers.template.js'

const AdditionalInformation = Templatize`
## Additional Information
${'cryptoassets.other_instructions'}
`()

export default Templatize`
# Crypto Asset Inventory for ${ 'grantor.full_name' }

${ 'meta' }

## Wallets
I use the following wallets to access and store my cryptoassets:

${ 'cryptoassets.wallets' }

${ 'cryptoassets.trusted_helpers'}

${ 'cryptoassets.other_instructions' }

--- END OF DOCUMENT ---
`({
    'cryptoassets.wallets': each(Wallet),
    'cryptoassets.trusted_helpers': TrustedHelpers,
    'cryptoassets.other_instructions': AdditionalInformation,
    'meta': Header,
})


