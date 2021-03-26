import Templatize from '../src/Templatize.js'

const pinTemplate = Templatize`You can unlock it with the PIN ${'pin'}.`()
const loginTemplate = Templatize`You can log in with the username ${'username'} and password ${'password'}.`()
const hostNameTemplate = Templatize`The hostname of this device is ${'host_name'}.`()

export default Templatize`
### ${'type'} ${'name'}

I have a ${'type'} ${'name'}. ${ 'host_name' } ${'login'} ${'pin'}
`({
    pin: pinTemplate,
    login: loginTemplate,
    host_name: hostNameTemplate
})