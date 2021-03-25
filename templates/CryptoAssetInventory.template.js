import Templatize from '../src/Templatize.js'
import Wallet from './Wallet.template.js'
import DocumentDate from './DocumentDate.template.js'
import {each} from '../src/templateHelpers.js'

export default Templatize`

# Crypto Asset Inventory for ${ 'grantor.full_name' }

${ 'meta' }

I use the following wallets to access and store my cryptoassets:

${ 'cryptoassets.wallets' }

That is all

`({
    'cryptoassets.wallets': each(Wallet),
    'meta': DocumentDate
})


