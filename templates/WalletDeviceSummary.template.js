import Templatize from "../src/Templatize.js";
import LoginCredentialTemplate from "./LoginCredentialTemplate.template.js"

export default Templatize`
I run it on my ${ 'name' } which is a ${ 'type' }. The hostname of this device is ${ 'host_name' }.
`({
    login: LoginCredentialTemplate
})

`

${ 'login' }

You can unlock this device with the PIN ${ 'pin' }.
`