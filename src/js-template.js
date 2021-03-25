import CryptoAssetInventoryForm from '../templates/CryptoAssetInventory.template.js'
import data from '../unprocessed-data.json'
import {set} from "./root.js";

set(data)

const filled = CryptoAssetInventoryForm(data)

console.log(filled)