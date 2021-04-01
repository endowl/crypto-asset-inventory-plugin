import T from 'backtickify'
import {each, bind, listOfItems} from 'backtickify/helpers'
import {getById} from 'backtickify/dataStore'

const STATUS_TEXT = {
    'in-progress': '# This document is a WORK IN PROGRESS',
    'revoked': '# This document has been REVOKED'
}

export default T`${bind('cryptoassets', T`
# Crypto Asset Inventory for ${'/grantor/full_name'}

${bind('/meta', T`
${bind('/meta/status', v => STATUS_TEXT[v])}

Today's Date: ${'/meta/date_signed'}
`)}

## Wallets
I use the following wallets to access and store my cryptoassets:

${bind('wallets', each(T`
#### ${'name'}

I use ${'name'} to access and store ${bind('asset_types', listOfItems('various cryptoassets'))}.
${bind('password>', T`The password to open the wallet is \`${'password'}\`.`)} ${bind('pin>', T`The PIN to open the wallet is \`${'pin'}\`.`)}
It is a ${'type'} ${bind('device_id>', v => T`that runs on my ${'type'} ${'name'} ${bind('host_name>', T`named \`${'host_name'}\``)}.
${bind('login', T`
You can log into this device with the following credentials:
* Username: ${'username'}
* Password: ${'password'}
`)}
${bind('pin>', T`You can unlock the device with the PIN \`${'pin'}\`.`)}`(getById('devices', v['device_id'])))}
`))}

${bind('trusted_helpers', T`
## Trusted Helpers
For help accessing my crypto assets, it is important to use helpers who are knowledgable and highly trustworthy. Here
 is a list of people that I believe are knowledable and will act with honesty and integrity.

*These assets cannot be recovered if stolen, so choose a helper carefully.*

${(each(v => T`
#### ${'full_name'}
${bind('address>', T`* Address: ${'address'}`)}
${bind('phone>', T`* Phone: ${'phone'}`)}
${bind('email>', T`* Email: ${'email'}`)}
`(getById('contacts', v))))}
`)}

${bind('other_instructions>', T`
## Additional Information
${'other_instructions'}
`)}

--- END OF DOCUMENT ---
`)}`