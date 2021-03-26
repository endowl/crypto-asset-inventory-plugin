import Templatize from '../src/Templatize.js'
import Wallet from './Wallet.template.js'
import Device from './Device.template.js'
import Header from './DocumentHeader.template.js'
import {each} from '../src/templateHelpers.js'

export default Templatize`

# Crypto Asset Inventory for ${ 'grantor.full_name' }

${ 'meta' }

## Devices
I have wallets stored on the following devices:

${ 'devices' }

## Wallets
I use the following wallets to access and store my cryptoassets:

${ 'cryptoassets.wallets' }

That is all

`({
    'cryptoassets.wallets': each(Wallet),
    'meta': Header,
    'devices': each(Device)
})


