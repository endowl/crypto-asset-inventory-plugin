import Templatize from '../src/Templatize.js'
import {getById} from "../src/root.js"
import {listOfItems} from "../src/templateHelpers.js"

const DeviceIdentifier = Templatize`that runs on my ${'type'} ${'name'} ${ 'host_name' }. ${'login'} ${'pin'}`({
    pin: Templatize`You can unlock the device with the PIN \`${'pin'}\`.`(),
    login: Templatize`You can log in to the device with the username \`${'username'}\` and password \`${'password'}\`.`(),
    host_name: Templatize`named \`${'host_name'}\``()
})

export default Templatize`
_${'name'}_

I use ${'name'} to access and store ${'asset_types'}. ${'password'} ${'pin'} It is a ${'type'} ${'device_id'}.
`({
    'asset_types': listOfItems('various cryptoasssets'),
    'device_id': v => DeviceIdentifier(getById('devices', v['device_id'])),
    'password': Templatize`The password to open the wallet is \`${'password'}\`.`(),
    'pin': Templatize`The PIN to open the wallet is \`${'pin'}\`.`()
})
