import Templatize from "../src/Templatize.js";

export default Templatize`
You can log into this device with the following credentials:

* Username: ${ 'username' }
* Password: ${ 'password' }
`()