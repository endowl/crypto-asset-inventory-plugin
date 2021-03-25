import Templatize from '../src/Templatize.js'
import {getById} from "../src/root.js"
import {listOfItems, prefixIfDefined} from "../src/templateHelpers.js"

const DeviceIdentifier = Templatize`${'type'}${'host_name'}`({
    'host_name': prefixIfDefined(' named ')
})

export default Templatize`
_${'name'}_

I use ${'name'} to access and store ${'asset_types'}. It is a ${'type'} running on my ${'device_id'}. Information about accessing this device is listed in the Devices section of this document.
`({
    'asset_types': listOfItems('various cryptoasssets'),
    'device_id': v => DeviceIdentifier(getById('devices', v))
})
