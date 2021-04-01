import T from 'backtickify'
import {each, bind, listOfItems} from 'backtickify/helpers'
import {getById} from 'backtickify/dataStore'

const STATUS_TEXT = {
    'in-progress': '# This document is a WORK IN PROGRESS',
    'revoked': '# This document has been REVOKED'
}
const DOCUMENT_STATUS = bind('/meta/status', v => STATUS_TEXT[v])
const CRYPTOASSET_INLINE_LIST = bind('asset_types', listOfItems('various cryptoassets'))
const WALLET_PASSWORD_OR_PIN = T`${bind('password>', T`The password to open the wallet is \`${'password'}\`.`)} ${bind('pin>', T`The PIN to open the wallet is \`${'pin'}\`.`)}`

const DEVICE_DESCRIPTION = T`that runs on my ${'type'} ${'name'} ${bind('host_name>', T`named \`${'host_name'}\``)}`

const DEVICE_PASSWORD_OR_PIN = T`${bind('login', T`
You can log into this device with the following credentials:
* Username: ${'username'}
* Password: ${'password'}
`)}${bind('pin>', T`You can unlock the device with the PIN \`${'pin'}\`.`)}`

const TRUSTED_HELPER_TEMPLATE = T`
#### ${'full_name'}
${bind('address>', T`* Address: ${'address'}`)}
${bind('phone>', T`* Phone: ${'phone'}`)}
${bind('email>', T`* Email: ${'email'}`)}
`

const CryptoAssetInventory = T`${bind('cryptoassets', T`
# Crypto Asset Inventory for ${'/grantor/full_name'}

${bind('/meta', T`
${DOCUMENT_STATUS}

Today's Date: ${'/meta/date_signed'}
`)}

## Wallets
I use the following wallets to access and store my cryptoassets:

${bind('wallets', each(T`
#### ${'name'}

I use ${'name'} to access and store ${CRYPTOASSET_INLINE_LIST}. ${WALLET_PASSWORD_OR_PIN}
It is a ${'type'} ${v => DEVICE_DESCRIPTION(getById('devices', v['device_id']))}.
${v => DEVICE_PASSWORD_OR_PIN(getById('devices', v['device_id']))}
`))}

${bind('trusted_helpers', T`
## Trusted Helpers
For help accessing my crypto assets, it is important to use helpers who are knowledgable and highly trustworthy. Here
 is a list of people that I believe are knowledable and will act with honesty and integrity.

*These assets cannot be recovered if stolen, so choose a helper carefully.*

${each(v => TRUSTED_HELPER_TEMPLATE(getById('contacts', v)))}
`)}

${bind('other_instructions>', T`
## Additional Information
${'other_instructions'}
`)}

--- END OF DOCUMENT ---
`)}`

export default CryptoAssetInventory