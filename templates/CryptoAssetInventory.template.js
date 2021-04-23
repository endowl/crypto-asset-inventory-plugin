import T from 'backtickify/src/Templatize'
import {bind, bindById, bindByIdField, bindToInlineList, bindEach} from 'backtickify/src/helpers'

const CryptoAssetInventory = T`${bind('cryptoassets', T`
# Crypto Asset Inventory${bind('/grantor/full_name>', T`for ${'/grantor/full_name'}`)}

${bind('/meta/status', {
    'in-progress': '## Document status: WORK IN PROGRESS',
    'revoked': '## Document status: REVOKED'})}

${'/meta/date_signed'}

${bind('heir_id>', T`
Dear ${bindByIdField('heir_id', 'contacts', T`${'firstName'}`)},
`, T`
To whom it may concern:
`)}

The purpose of this letter is to document the cryptoassets I own, how they are stored, and how they can be recovered in
case of my incapacitation or death.

### Wallets

I use the following wallets to access and store my cryptoassets:

${bindEach('wallets', T`
#### ${'name'}

I use **${'name'}** to access and store ${bindToInlineList('typesHeld', 'various cryptoassets')}.
${bind('pin_or_password>', T`The password to open the wallet is **${'pin_or_password'}**`)}.
It is a ${'type'}
${bindByIdField('device_id', 'devices', 
    T`that runs on my ${'type'} ${'name'} ${bind('host_name>', T`named \`${'host_name'}\``)}.
${bind('location>', T`I keep it in the following location: *${'location'}*`)}.    
${bind('login', T`You can log into this device with the following credentials:

* Username: **${'username'}**
* Password: **${'password'}**`)}
${bind('pin>', T`You can unlock the device with the PIN **${'pin'}**.`)}.
.`)}
.`)}

${bind('trustedHelpers>', T`
### Trusted Helpers

For help accessing my crypto assets, it is important to use helpers who are knowledgable and highly trustworthy. Here
is a list of people that I believe are knowledgeable and will act with honesty and integrity.

${bindEach('trustedHelpers', bindById('contacts', T`
#### ${'fullName'}

${bind('address>', T`* Address: **${'address'}**
`)}${bind('phone>', T`* Phone: **${'phone'}**
`)}${bind('email>', T`* Email: **${'email'}**`)}`))}

These assets cannot be recovered if stolen, so choose a helper carefully. Get to know each of the trusted helpers and
select the one that you believe will be the most *helpful to you*.
`)}

${bind('otherInformation>', T`
### Additional Information

Here's some additional information that you may find useful:

${'otherInformation'}
`)}

${bind('/grantor/full_name', T`
With love,

${'/grantor/full_name'}
`, T`
 - Anonymous
`)}`
)}`

export default CryptoAssetInventory