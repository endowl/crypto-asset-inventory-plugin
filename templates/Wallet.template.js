import Templatize from './Templatize.js'

export default Templatize`
_${ 'name' }_

I use ${ 'name' } to access and store ${ 'asset_types' }. It is a ${ 'type' }.
`()
// ${ devices[''] ?? WalletDevice() }
// I run it on my {{ device.name }} which is a {{ device.type }}. The hostname of this device is {{ device.host_name }}.
//         {% if device.login %}
// To access my {{ device.name }}, you can log in with the username {{ device.login.username }} and password {{ device.login.password }}.
//         {% endif %}
//         {% if device.pin %}
// You can unlock my {{ device.name }}, with the PIN {{ device.pin }}.
//         {% endif %}
//     {% endif %}
// `