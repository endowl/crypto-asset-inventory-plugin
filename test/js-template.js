import CryptoAssetInventoryForm from '../templates/CryptoAssetInventory.template.js'
import data from './test-data.json'
import {set} from "../src/root.js";

set(data)

const filled = CryptoAssetInventoryForm(data)

console.log(filled)